import { useHistory, useParams } from "react-router-dom";
import { getMealById } from "../api";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const MealRecipe = () => {
  const { id } = useParams();
  const { goBack } = useHistory();
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowrecipe] = useState(false);

  const handleShowrecipe = () => {
    setShowrecipe(!showRecipe);
  };

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>
            <b>Category : </b> {recipe.strCategory}
          </h6>
          {recipe.strArea ? (
            <h6>
              <b>Area : </b>
              {recipe.strArea}
            </h6>
          ) : null}
          <p>{recipe.strInstructions}</p>
          <button className="btn" onClick={handleShowrecipe}>
            Show Recipe
          </button>
          {showRecipe ? (
            <table>
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((el) => {
                  if (el.includes("Ingredient") && recipe[el]) {
                    return (
                      <tr>
                        <td>{recipe[el]}</td>
                        <td>{recipe[`strMeasure${el.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table> 
          ) : null}

          {!recipe.strYoutube ? null : (
            <div className="row">
              <h5>Vidoe Prepairing</h5>
              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
                title={recipe.strMeal}
              />
            </div>
          )}
        </div>
      )}
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
    </>
  );
};
export default MealRecipe;
