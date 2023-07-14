import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: (user: object | null) => {},
    setToken: (token: string | null) => {},
})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    // @ts-ignore
    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <>

            <StateContext.Provider value={{
                user,
                setUser,
                token,
                setToken
            }}>
                {children}

            </StateContext.Provider>

        </>
    );

}

export const useStateContext = () => useContext(StateContext);
