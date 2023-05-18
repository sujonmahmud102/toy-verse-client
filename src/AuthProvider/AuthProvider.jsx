import React, { createContext, useState } from 'react';

export const Authcontext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);

    const authInfo = {
        user,
    };

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;