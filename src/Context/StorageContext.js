import { createContext } from "react";
import { supabase } from "../Auth/Supabase";

const StorageContext = createContext({});

export const upload = ({ bucket_name, file, path }) => supabase.storage.from(bucket_name).upload(path, file, {
    cacheControl: '3600',
    upsert: false
})

export const remove = ({ bucket_name, path }) => supabase.storage.from(bucket_name).remove([path])

export const storage = () => supabase.storage

export const supa = () => supabase

const StorageProvider = ({ children }) => {
    return (
        <StorageContext.Provider value={{ upload, remove, storage, supa }}>
            {children}
        </StorageContext.Provider>
    );
};

export default StorageProvider;