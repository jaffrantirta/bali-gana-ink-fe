import { createContext } from "react";
import { strapi } from "../Auth/Strapi";

const ContactContext = createContext({});

export const find = (collection, params = {}) => strapi.find(collection, params);

export const findOne = (collection, params = {}) => strapi.findOne(collection, params);

export const findByCategory = (categoryId) => strapi.find('contacts', {
    filters: {
        contact_category: categoryId
    },
    populate: '*'
});

const ContactProvider = ({ children }) => {
    return (
        <ContactContext.Provider value={{ find, findByCategory, findOne }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;