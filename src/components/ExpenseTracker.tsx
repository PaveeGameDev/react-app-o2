import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(1),
  category: z.string().min(1, { message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

type itemsType = {
  id: number;
  description: string;
  amount: number;
  category: string;
}[];

export const ExpenseTracker = () => {
  const [items, setItems] = useState<itemsType>([]);

  const [selectedValue, setSelectedValue] = useState("");

  const [currentItemsFiltered, setCurrentItemsFiltered] =
    useState<itemsType>(items);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setItems([
      ...items,
      {
        id: items[items.length - 1] ? items[items.length - 1].id + 1 : 0,
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
    postHandleFilter(selectedValue, [
      ...items,
      {
        id: items[items.length - 1] ? items[items.length - 1].id + 1 : 0,
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
    console.log(items);
  };

  const deleteItem = (itemId: number) => {
    setItems(items.filter((item) => item.id !== itemId));
    postHandleFilter(
      selectedValue,
      items.filter((item) => item.id !== itemId),
    );
    console.log(items);
  };

  const handleFilter = (event: any) => {
    setSelectedValue(event.target.value);
    postHandleFilter(event.target.value, items);
  };

  const postHandleFilter = (filter: string, items: itemsType) => {
    setCurrentItemsFiltered(
      items.filter((item) => (filter ? item.category === filter : true)),
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />

          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-control"
          >
            <option value=""></option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      <select
        className="form-control"
        value={selectedValue}
        onChange={handleFilter}
      >
        <option value="">All</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <table className="d-md-table">
        <thead className="d-md-table">
          <tr className="">
            <td className="table-active">Description</td>
            <td>Amount</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {currentItemsFiltered.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>${item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>
              $
              {Object.values(currentItemsFiltered).reduce(
                (t, n) => t + n.amount,
                0,
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
