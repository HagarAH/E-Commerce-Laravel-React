import {createContext, useContext, useState} from "react";

const ACCESS_TOKEN = 'ACCESS_TOKEN';

type ContextType = {
    user: object | null,
    token: string | null,
    setUser: (user: object | null) => void,
    setToken: (token: string | null) => void
}

const StateContext = createContext<ContextType>({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState<object | null>(null);
    const [token, _setToken] = useState<string | null>(localStorage.getItem(ACCESS_TOKEN));

    const setToken = (token: string | null) => {
        _setToken(token)
        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token)
        } else {
            localStorage.removeItem(ACCESS_TOKEN);
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
