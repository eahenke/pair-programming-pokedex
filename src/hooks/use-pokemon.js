import { useState, useEffect } from 'react';
import useApi from './use-api';

const usePokemon = (page = 0) => {
    const api = useApi();
    const [loading, setLoading] = useState(false);
    const [error, setError ] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const getPokemon = async () => {
            try {
                setError('');
                setLoading(true);
                const { pokemon } = await api.getPokemonList(page);
                setData(pokemon);
                setLoading(false);
            } catch(e) {
                setLoading(false);
                setError(e.message);
            }
        }
        getPokemon();
    }, [page])

    return {
        loading,
        error,
        data

    }
}

export default usePokemon;