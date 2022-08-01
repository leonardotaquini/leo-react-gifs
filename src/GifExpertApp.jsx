import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = ( category ) => {
    if (categories.includes( category )) return;
    setCategories([ category, ...categories ]);
  };

  return (
    <>
      <h1 className="text-center">Gif App</h1>

      <AddCategory onNewValue={ onAddCategory } />

      {categories.map(( category ) => (
        <GifGrid category={ category } key={ category } />
      ))}
    </>
  );
};
