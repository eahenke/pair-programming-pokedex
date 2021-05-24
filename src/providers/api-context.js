import React from 'react';
import api from '../api';

export const ApiContext = React.createContext();

export default function ApiProvider({children}) {
    return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
}