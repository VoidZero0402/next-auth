import LogoutButton from "@/components/modules/panel/LogoutButton";
import getMe from "@/utils/getMe";
import { cookies } from "next/headers";
import React from "react";

async function Panel() {
    const user = await getMe();

    return (
        <div className="container pt-4">
            <div className="bg-white p-8 rounded-lg flex flex-col gap-y-2">
                <h2 className="text-gray-800 text-2xl mb-2">Hello {user.username}!</h2>
                <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at porro accusantium inventore necessitatibus, et quo, architecto, vel quas doloribus eum? Exercitationem sed neque repudiandae.</p>
            </div>
            <LogoutButton />
        </div>
    );
}

export default Panel;
