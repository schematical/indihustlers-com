import {cookies} from "next/headers";
import { uuidv7 } from "uuidv7";
export const PH_COOKIE = 'ph-cookie';
export const generateId =() => {
    const id = uuidv7()
    return id
}

export function getDistinctId() {
    const cookieStore = cookies()
    const phCookie = cookieStore.get(PH_COOKIE);
    if (!phCookie) {
        throw new Error("Missing Cookie");
    }
    return phCookie.value;
}