import { NextResponse, NextRequest } from 'next/server'
import {generateId, PH_COOKIE} from "@/src/app/util";

// This function can be marked `async` if using `await` inside
export async function  middleware(request: NextRequest) {
    const phCookie = request.cookies.get(PH_COOKIE);
    let distinct_id = '';
    if (phCookie) {
        return  NextResponse.next();
    }
    distinct_id = generateId();
   /* request.cookies.set(PH_COOKIE, distinct_id);
    request.headers.set(PH_COOKIE, distinct_id);*/
    const headers = new Headers(request.headers);
    headers.set(PH_COOKIE, distinct_id);
    const response: NextResponse = NextResponse.next({
        request: {
            headers
        }
    });
    response.cookies.set(PH_COOKIE, distinct_id);
    return response;// redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}