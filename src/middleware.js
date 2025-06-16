import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const accessToken = cookies().get("accessToken");

    if (!accessToken) {
        const res = await fetch("http://localhost:3000/api/auth/refresh", { credentials: "include", headers: { cookie: cookies().toString() } });

        if (res.status === 401) {
            return NextResponse.redirect(new URL("/auth/login", request.url));
        }

        const { cookie } = await res.json();

        const response = NextResponse.next();

        response.cookies.set({
            name: "accessToken",
            value: cookie.accessToken,
            ...cookie.cookieOptions,
            maxAge: cookie.cookieOptions.maxAge / 1000
        });

        return response;
    }
}

export const config = {
    matcher: ["/panel:path*"],
};
