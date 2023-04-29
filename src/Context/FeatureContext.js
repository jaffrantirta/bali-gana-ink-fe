import { createContext } from "react";
import { strapi } from "../Auth/Strapi";

const FeatureContext = createContext({});

export const find = () => strapi.find('features', {
    populate: '*'
});

const FeatureProvider = ({ children }) => {
    return (
        <FeatureContext.Provider value={{ find }}>
            {children}
        </FeatureContext.Provider>
    );
};

export default FeatureProvider;