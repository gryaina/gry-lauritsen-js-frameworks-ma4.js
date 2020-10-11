import React from "react";
import Heading from '../layout/Heading';
import RecipeList from "../recipe/RecipeList";

function Layout() {
  return (
    <>
      <Heading title ="Recipes for everyone" />
      <RecipeList />
    </>
  )
}

export default Layout;
