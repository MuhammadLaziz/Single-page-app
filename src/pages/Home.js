import { useState, useEffect } from "react";
import { getByCategories } from "../api";
import { useLocation, useHistory } from "react-router-dom";

import CategoryList from "../components/CategoryList";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default function Home() {
  const [category, setCategory] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const {pathname, search} = useLocation()
  const {push} = useHistory()

  const handleSearch = (str) => {
      setFilteredCatalog(category.filter(el => el.strCategory.toLowerCase().includes(str.toLowerCase())))
      push({
          pathname,
          search: `?search=${str}`
      })
  }

  useEffect(() => {
    getByCategories().then((data) => {
      setCategory(data.categories);
      setFilteredCatalog(search ? 
                        data.categories.filter(el => el.strCategory.toLowerCase()
                                                                    .includes(search.split("=")[1].toLowerCase()
                                                )) : data.categories)
    });
  }, [search]);

  return (
    <>
        <Search cb={handleSearch} />
        {!category.length ?
             <Loader /> : 
             <CategoryList category={filteredCatalog} />}</>
  );
}
