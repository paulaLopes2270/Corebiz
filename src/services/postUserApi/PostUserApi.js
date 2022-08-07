import { api } from "../httpCommons/HttpCommon"

export const PostUserApi = async (user) => {
    try {
        const response = await api.post("/newsletter", {
            "email": user.email,
            "name": user.name
        })
        console.log(response)
        return response

    }
    catch (err) {
        console.log("error!")
        console.log(err)
    }
}