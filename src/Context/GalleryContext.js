import { createContext } from "react";
import { strapi } from "../Auth/Strapi";

const GalleryContext = createContext({});

export const showBycategory = (categoryId) => strapi.find('galleries', {
    filters: {
        categories: categoryId
    },
    populate: '*'
});

const GalleryProvider = ({ children }) => {
    return (
        <GalleryContext.Provider value={{ showBycategory }}>
            {children}
        </GalleryContext.Provider>
    );
};

export default GalleryProvider;