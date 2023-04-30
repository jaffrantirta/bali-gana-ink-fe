import { createContext } from "react";
import { strapi } from "../Auth/Strapi";

const CategoryContext = createContext({});

export const findOne = (categoryId) => strapi.findOne('categories', categoryId);
export const find = () => strapi.find('categories');

const CategoryProvider = ({ children }) => {
    return (
        <CategoryContext.Provider value={{ findOne, find }}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;