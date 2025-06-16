import { cookies, headers } from "next/headers";
const { redirect } = require("next/navigation");

const getMe = async () => {
    let user = null;

    const res = await fetch("http://zkowwococwocc8gwcs0cc40s.82.115.18.67.sslip.io/api/auth/me", { credentials: "include", headers: { cookie: cookies().toString() } });

    if (res.status === 200) user = await res.json();

    if (!user) redirect(headers().get("referer"));

    return user;
};

export default getMe;
