import { Link } from "react-router-dom"

export default function MealItem(props) {
    const {strMeal, strMealThumb, idMeal} = props
    return(
        <div key={idMeal} className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <p className="card-title">{strMeal}</p>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn">See Recipe</Link>
            </div>
        </div>
    )
}