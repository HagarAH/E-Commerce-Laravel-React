import {createContext, useContext, useState} from "react";

type PaymentContextType = {
    oauthCode: string | null,
    oauthState: string | null,
    oauthToken: string | null,
    setOAuthCode: (oauthCode: string | null) => void,
    setOAuthState: (oauthState: string | null) => void,
    setOAuthToken: (oauthToken: string | null) => void
}

const PaymentStateContext = createContext<PaymentContextType>({
    oauthCode: null,
    oauthState: null,
    oauthToken: null,
    setOAuthCode: () => {
    },
    setOAuthState: () => {
    },
    setOAuthToken: () => {
    },
})

// @ts-ignore
export const PaymentProvider = ({children}) => {
    const [oauthState, setOAuthState] = useState<string | null>(null);
    const [oauthCode, setOAuthCode] = useState<string | null>(null);
    const [oauthToken, setOAuthToken] = useState<string | null>(null);

    return (
        <PaymentStateContext.Provider value={{
            oauthCode,
            oauthState,
            oauthToken,
            setOAuthCode,
            setOAuthState,
            setOAuthToken
        }}>
            {children}
        </PaymentStateContext.Provider>
    );
}

export const usePaymentStateContext = () => useContext(PaymentStateContext);
