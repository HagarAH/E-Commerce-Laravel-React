import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {
    },
    setToken: () => {
    }
})

// @ts-ignore
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
                // @ts-ignore
                user,
                // @ts-ignore
                token,
                // @ts-ignore
                setUser,
                // @ts-ignore
                setToken
            }}>
                {children}

            </StateContext.Provider>

        </>
    )

}

export const useStateContext = () => useContext(StateContext);
