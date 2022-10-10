import { useState, useEffect } from "react";
import CategoriesList from "../../components/category-list/CategoryList.component";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  }, []);

  return <CategoriesList categories={categories} />;
};

export default Home;
