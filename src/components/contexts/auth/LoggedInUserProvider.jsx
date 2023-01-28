import { LoggedInUserContext } from './LoggedInUserContext';

export const LoggedInUserProvider = ({ children }) => { 
    return <LoggedInUserContext.Provider value={{}}>{children}</LoggedInUserContext.Provider>;
}