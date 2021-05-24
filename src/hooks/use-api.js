import { useContext } from "react";
import { ApiContext } from "../providers/api-context";

export default function useApi() {
    const api = useContext(ApiContext);
    
    return api;
}