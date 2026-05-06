export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="flex  flex-wrap justify-center mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`text-xs md:text-sm  px-4 py-2 m-1 md:m-2 rounded ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
