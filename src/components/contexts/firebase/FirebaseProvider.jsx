import { FirebaseContext } from "./FirebaseContext";
import { FieldValue, firebase } from "../../../lib/firebase";



export const FirebaseProvider = ({ children }) => {
    return <FirebaseContext.Provider value={{ FieldValue, firebase }}>{children}</FirebaseContext.Provider>;
};