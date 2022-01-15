import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;

  return (
    <div id={idCategory} className="card" style={{textAlign: 'left'}}>
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <h1 className="card-title" style={{fontWeight: 'bolder'}}>{strCategory}</h1>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
          <Link to={`/category/${strCategory}`} className="btn">See Category</Link>
      </div>
    </div>
  );
};
export default CategoryItem;
