import { ExpenseList } from "./components/ExpenseList";
import { useState } from "react";
import { ExpenseFilter } from "./components/ExpenseFilter";
import { ExpenseForm } from "./components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];
export const ExpenseTrackerVideo = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};