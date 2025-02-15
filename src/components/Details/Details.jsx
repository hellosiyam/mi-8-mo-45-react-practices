
import { useLoaderData, useNavigate,  } from 'react-router-dom';

const Details = () => {
    const detail = useLoaderData();
    const mealDetail = detail.meals[0]
    console.log(mealDetail);
    
    const navigate = useNavigate();
    const backHandel =() => {
        navigate(-1)
    }
    const {strMeal, strCategory, strMealThumb} = mealDetail
    return (
        <div>
            <h1>{strMeal}</h1>
            <img src={strMealThumb} alt=""/>
            <h1>{strCategory}</h1>
            <button onClick={backHandel} >Go Back</button>
        </div>
    );
};

export default Details;