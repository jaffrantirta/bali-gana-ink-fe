import { createContext, useContext } from "react";
import { strapi } from "../Auth/Strapi";

const CategoryContext = createContext({});

export const findOne = (categoryId) => strapi.findOne('categories', categoryId);

const CategoryProvider = ({ children }) => {
    return (
        <CategoryContext.Provider value={{ findOne }}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;