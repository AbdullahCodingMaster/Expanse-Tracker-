import { useState } from "react";
import ExpanseFilter from "./expanse-tracker/components/ExpanseFilter";
import ExpanseList from "./expanse-tracker/components/ExpanseList";
import ExpanseForm from "./expanse-tracker/components/ExpanseForm";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expanses, setExpanses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 200,
      category: "Utilities",
    },
    {
      id: 2,
      description: "Movie",
      amount: 2000,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "Cheese",
      amount: 200,
      category: "Groceries",
    },
  ]);

  const visibleExpanses = selectedCategory
    ? expanses.filter((e) => e.category === selectedCategory)
    : expanses;
  return (
    <>
      <div className="mb-5">
        <ExpanseForm
          onSubmit={(expanse) =>
            setExpanses([...expanses, { ...expanse, id: expanses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpanseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpanseList
        expanses={visibleExpanses}
        onDelete={(id) => setExpanses(expanses.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default App;
