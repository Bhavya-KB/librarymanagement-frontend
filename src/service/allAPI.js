import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"


export const addUserAPI =async (reqBody)=>{
    return await commonAPI("POST", `${BASEURL}/admin`,reqBody)
}