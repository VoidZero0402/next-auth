"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signupUserSchema } from "@/validation/auth.validator";

function SignUp() {
    const formRef = useRef(null);
    const [isPending, setIsPending] = useState(false);
    const [feildsError, setFieldsError] = useState({});
    const router = useRouter();

    const submitForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const user = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const { success, error } = signupUserSchema.safeParse(user);

        if (!success) {
            setFieldsError(error.flatten().fieldErrors);
        } else {
            setFieldsError({});
            setIsPending(true);

            const res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(user),
            });

            switch (res.status) {
                case 200: {
                    toast.success("Your signup was successful!", { duration: 1000 });
                    await res.json();
                    const timeout = setTimeout(() => {
                        formRef.current.reset();
                        router.replace("/panel");
                        clearTimeout(timeout);
                    }, 1000);
                    break;
                }

                case 409: {
                    toast.error("Email already exist, try with another email!");
                    break;
                }

                case 400: {
                    toast.error("Please enter valid data!");
                    break;
                }

                case 500: {
                    toast.error("Server error, pleasee try again!");
                    break;
                }
            }

            setIsPending(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-dvh">
            <div className="bg-white w-[400px] p-8 rounded-lg shadow-md shadow-gray-200 space-y-4">
                <Link href="/" className="text-3xl text-blue-600 font-roboto-medium block text-center">
                    JWTAuth
                </Link>
                <span className="text-lg text-gray-700 block text-center">SignUp To Your Acccount</span>
                <form ref={formRef} className="flex flex-col gap-y-4" onSubmit={submitForm}>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="username" className="text-gray-800">
                            Username
                        </label>
                        <input type="text" id="username" name="username" className="p-2.5 rounded-md border border-gray-200 outline-none text-gray-700 focus:border-gray-300 transition-all" />
                        {feildsError.username && <p className="text-sm text-rose-600 font-normal">{feildsError.username[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="email" className="text-gray-800">
                            Email Address
                        </label>
                        <input type="email" id="email" name="email" className="p-2.5 rounded-md border border-gray-200 outline-none text-gray-700 focus:border-gray-300 transition-all" />
                        {feildsError.email && <p className="text-sm text-rose-600 font-normal">{feildsError.email[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="password" className="text-gray-800">
                            Password
                        </label>
                        <input type="password" id="password" name="password" className="p-2.5 rounded-md border border-gray-200 outline-none text-gray-700 focus:border-gray-300 transition-all" />
                        {feildsError.password && <p className="text-sm text-rose-600 font-normal">{feildsError.password[0]}</p>}
                    </div>
                    <button type="submit" disabled={isPending} className="bg-blue-600 disabled:bg-blue-500 text-white p-3 rounded-md block mt-2 hover:bg-blue-700 transition-all">
                        {isPending ? "Pending Request..." : "SignUp Now"}
                    </button>
                    <p className="text-gray-500 text-sm">
                        You Have An Account?{" "}
                        <Link href="/auth/login" className="text-blue-600">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
            <Toaster />
        </div>
    );
}

export default SignUp;
