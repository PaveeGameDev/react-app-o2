import { categories } from "../ExpenseTrackerVideo";

type Props = {
  onSelectCategory: (category: string) => void;
};
export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-select"
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
