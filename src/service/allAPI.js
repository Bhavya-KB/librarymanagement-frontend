import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"

// add user
export const addUserAPI = async (reqBody) => {
    return await commonAPI("POST", `${BASEURL}/admin`, reqBody)
}


//  Get all users
export const getAllUsersAPI = async () => {
    return await commonAPI("GET", `${BASEURL}/admin`, "")
}

//  Get a single user by ID
export const getUserAPI = async (id) => {
    return await commonAPI("GET", `${BASEURL}/admin/${id}`, "")
}

//  Update  user
export const updateUserAPI = async (id, reqBody) => {
    return await commonAPI("PUT", `${BASEURL}/admin/${id}`, reqBody)
}
//  Delete  user
export const deleteUserAPI = async (id) => {
    return await commonAPI("DELETE", `${BASEURL}/admin/${id}`, {})
}