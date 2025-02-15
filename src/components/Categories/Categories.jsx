import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import './Categories.css'
const Categories = () => {
    const allMeals = useLoaderData()
    const meals = allMeals.meals
    
    return (
        <div>
            <h1>Our Food Category : {meals.length}</h1>
            <div className="mealsContainer">
                {
                    meals.map(meal => <Category meal={meal}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;