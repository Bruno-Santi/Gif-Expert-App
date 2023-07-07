// eslint-disable-next-line no-unused-vars
import {
  Fragment,
  useEffect,
  useState,
} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] =
    useState([]);
  const [error, setError] =
    useState("");
  const addCategory = (newCategory) => {
    setError("");
    if (categories) {
      let existingCategory =
        categories.includes(
          newCategory
        );
      existingCategory
        ? setError(
            "No puede haber categorias repetidas"
          )
        : setCategories(
            (initialState) => [
              newCategory,
              ...initialState,
            ]
          );
    } else {
      setCategories([...newCategory]);
    }
  };
  useEffect(() => {}, [categories]);
  const removeItem = (target) => {
    let filtredCategories =
      categories.filter(
        (category) =>
          category !== target
      );
    filtredCategories
      ? setCategories([
          ...filtredCategories,
        ])
      : setCategories([]);
  };
  return (
    <Fragment>
      <h1>Gif Expert App</h1>
      <AddCategory
        addCategory={addCategory}
      />
      {error ? <p>{error}</p> : ""}

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          removeItem={removeItem}
        />
      ))}
    </Fragment>
  );
};
