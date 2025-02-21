import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";
export interface Genre {
    id :number
    name : string
}
interface FetchGenresResponse {
    count: number;
    results: Genre[]
}

const UseGenres = () => {
    const [genres, setGenre] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then((response) => {
                setGenre(response.data.results)
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setLoading(false);
            })
        return () => controller.abort();

    }, []);
    return {genres, error,isLoading}
}
export default UseGenres