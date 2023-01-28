import { UserContext} from './UserContext'

export const UserProvider = ({ children }) => { 
    return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}