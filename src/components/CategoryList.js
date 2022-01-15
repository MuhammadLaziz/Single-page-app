import CategoryItem from "./CategoryItem"

export default function CategoryList (props) {
    const {category = []} = props
    return(
        <div className="list">
            {category.map(el => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    )
}
