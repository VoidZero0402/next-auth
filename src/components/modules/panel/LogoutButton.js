"use client";

import { useRouter } from "next/navigation";

function LogoutButton() {
    const router = useRouter();

    const logout = async () => {
        const res = await fetch("http://zkowwococwocc8gwcs0cc40s.82.115.18.67.sslip.io/api/auth/logout", { credentials: "include" });

        const isNavigatableStatus = res.status === 205 || res.status === 401;
        if (isNavigatableStatus) {
            router.replace("/");
        }
    };

    return (
        <button onClick={logout} className="block mt-4 ml-auto py-2.5 px-4 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-all">
            Logout From Account
        </button>
    );
}

export default LogoutButton;
