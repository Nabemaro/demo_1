import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { testData } from "./TestData";
import { useState, useCallback } from "react";


const RecipePage = () => {
  const [recipes, setRecipes] = useState(testData);
  const [recipeDetail, setRecipeDetail] = useState({});

  function handleSearch(val) {
    if (val) {
      setRecipes(recipes.filter((recipe) => recipe.name.includes(val))); //Simple filtering method on change of search bar.
    } else {
      setRecipes(testData); //Resets filter to default array.
    }
  }

  function displayRecipeDetails() {
    if (Object.keys(recipeDetail).length === 0) {
      return <h2>Click on a recipe to see its details!</h2>;
    } else {
      //Not a very good implementation, too verbose. Might update to use function call.
      return (
        <>
          <h2>{recipeDetail.name}</h2>
          <img src={recipeDetail.imgSrc} alt="Detail Image" />
          <h3 className="subheader">Ingredients:</h3>
          <p className="ingredients">{recipeDetail.ingredients}</p>
          <h3 className="subheader">Macronutrients:</h3>
          <ul>
            <li>Calories: {recipeDetail.macros.calories}</li>
            <li>Protein: {recipeDetail.macros.protein}g</li>
            <li>Carbohydrates: {recipeDetail.macros.carbs}g</li>
            <li>Fat: {recipeDetail.macros.fat}g</li>
          </ul>
          <h3 className="subheader">Instructions:</h3>
          <ol className="instructions">{getLIs(recipeDetail.instructions)}</ol>
        </>
        /*
          **TODO**: Update data object structure - I totally forgot that \n escape
          symbols don't translate over to HTML/JSX. Seems like I must use
          ul and li to format the macros and instructions. Headache.
        */
      );
    }
  }

  function getLIs(obj) {
    const output = []
    for(const i in obj) {
      output.push(<li>{obj[i]}</li>)
    }
    return output;
  }

  function generateRecommendations() {

    /*
      Warning, huge issue with this currently. Because clicking on recommendations
      causes page to re-render, it causes the daily recommendations to change as well.
      New implementation needed.
    */
    //Randomly generates list of daily recommendations
    const listOfIndexes = [];

    for (let i = 0; i < recipes.length; i++) {
      listOfIndexes.push(i);
    }

    //This step prevents repeats from happening.
    const recommendedRecipes = [];
    while (recommendedRecipes.length < 3) {
      const randomIndex = Math.floor(Math.random() * listOfIndexes.length);
      const randomValue = listOfIndexes.splice(randomIndex, 1)[0];
      recommendedRecipes.push(recipes[randomValue]);
    }

    return recommendedRecipes.map((r) => (
      <button
        className="recipe-container"
        key={r.id}
        onClick={handleRecipeClick(r.id)}
      >
        <span>{r.name}</span>
        <img src={r.imgSrc} alt="Recipe Image" />
      </button>
    ));
  }

  //Must use callback to prevent infinite render loop.
  //I know this is slightly stupid, because I should've broken this page down into more components
  //to prevent handling 2 separate states in the same component.
  const handleRecipeClick = useCallback(
    (id) => () => {
      const recipe = recipes.find((recipe) => recipe.id === id);
      if (recipe) {
        setRecipeDetail(recipe);
      }
    },
    [recipes]
  );

  //Generate list of recipes
  const recipeList = recipes.map((item) => (
    <button
      className="recipe-container"
      key={item.id}
      onClick={handleRecipeClick(item.id)}
    >
      <span>{item.name}</span>
      <img src={item.imgSrc} alt="Recipe Image" />
    </button>
  ));

  return (
    <div className="recipe-page-container">
      <div className="header-row">
        <Link path="/" className="back-btn">
          <span>Back</span>
        </Link>
        <h1>Recipe Recommendations</h1>
      </div>
      <div className="functional-section">
        <div className="daily-recommendations">
          <div className="recommendations-container">
            <h2>Daily Recommendations</h2>
            <div className="recommended-meals-container">
              {generateRecommendations()}
            </div>
          </div>
        </div>
        <div className="meal-section">
          <div className="meal-details">{displayRecipeDetails()}</div>
          <div className="search-section">
            <input
              type="text"
              className="search-box"
              placeholder="Search..."
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <div className="recipe-list">{recipeList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
