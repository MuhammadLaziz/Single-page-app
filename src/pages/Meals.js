import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFilterCategories } from "../api"
import Loader from "../components/Loader"
import MealList from "../components/MealList"

export default function Movie () {
    const {name} = useParams()
    const [meal, setMeal] = useState([])
    
    useEffect(() => {
        getFilterCategories(name).then(data => {
            setMeal(data.meals)
        })
    }, [name])
    

    return(
        <>
            {!meal.length ? <Loader /> : <MealList meal={meal} />}
        </>
    )
}
