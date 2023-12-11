import { VALID_USERNAMES } from "./constants";

export function isCredentialsValid(username, password = "") {
    if(!username || !password) return false
    return !!VALID_USERNAMES.includes(username.trim())
}
