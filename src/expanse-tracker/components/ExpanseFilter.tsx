import categories from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpanseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

export default ExpanseFilter;
