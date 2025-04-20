//this is a global user context to store if the user is logged in or not

import { createContext } from "react";

//createContext is a utility function for creating context
const userContext=createContext({
    loggedInUser:"Default user",
})

export default userContext