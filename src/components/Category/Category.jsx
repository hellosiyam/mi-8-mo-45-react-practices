import PropTypes from "prop-types";
import './Category.css'
import { useNavigate } from "react-router-dom";
const Category = ({meal}) => {
    const {idMeal, strMeal, strMealThumb, strCategory,} = meal;

    const navigate = useNavigate();
    const detailHandel = () => {
        navigate(`/category/${idMeal}`)
    }
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <h3>{strCategory}</h3>
            <button onClick={detailHandel}>Details</button>
        </div>
    );
};

Category.propTypes = {
    meal : PropTypes.object.isRequired
}

export default Category;