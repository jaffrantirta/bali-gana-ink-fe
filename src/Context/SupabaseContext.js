import { createContext } from "react";
import { supabase } from "../Auth/Supabase";

const SupabaseContext = createContext({});

export const show = (table) => supabase.from(table)

export const storage = (bucket_name) => supabase.storage.from(bucket_name)

const SupabaseProvider = ({ children }) => {
    return (
        <SupabaseContext.Provider value={{ show, storage }}>
            {children}
        </SupabaseContext.Provider>
    );
};

export default SupabaseProvider;