import { useState, useCallback } from "react";
import { logApi } from "../utils/apiLogger";

export default function useApi() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const request = useCallback(async (apiCall) => {

        const startTime = new Date().toLocaleString();
        setLoading(true);
        setError("");
        try {
            const response = await apiCall();
            logApi({
                url: response.config.url,
                method: response.config.method.toUpperCase(),
                startTime,
                status: response.status,
                error: null
            });
            return response;
        } catch (err) {
    
            logApi({
                url: err.config?.url,
                method: err.config?.method?.toUpperCase(),
                startTime,
                status: err.response?.status || "No Response",
                error: err.message
            });
            setError(err.message);
            return null;

        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        error,
        request
    };
}