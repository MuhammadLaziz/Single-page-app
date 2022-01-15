// import { useState, useEffect } from "react"

import MealItem from "./MealItem";

export default function MealList({meal}) {

    return(
        <div className="list">
            {meal.map(el => (
                <MealItem key={el.idMeal} {...el} />
            ))}
        </div>
    )
}