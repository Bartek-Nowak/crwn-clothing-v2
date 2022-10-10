import CategoryItem from "../category-item/CategoryItem.component";
import "./categories.styles.scss";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
