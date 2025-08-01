"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { loginUserSchema } from "@/validation/auth.validator";
import { useRouter } from "next/navigation";

function Login() {
    const formRef = useRef(null);
    const [isPending, setIsPending] = useState(false);
    const [fieldsError, setFieldsError] = useState({});
    const router = useRouter();

    const submitForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const user = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const { success, error } = loginUserSchema.safeParse(user);

        if (!success) {
            setFieldsError(error.flatten().fieldErrors);
        } else {
            setFieldsError({});
            setIsPending(true);

            const res = await fetch("http://zkowwococwocc8gwcs0cc40s.82.115.18.67.sslip.io/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(user),
            });

            switch (res.status) {
                case 200: {
                    toast.success("Your login was successful!", { duration: 1000 });
                    await res.json();
                    const timeout = setTimeout(() => {
                        formRef.current.reset();
                        router.replace("/panel");
                        clearTimeout(timeout);
                    }, 1000);
                    break;
                }

                case 404: {
                    toast.error("User not found with this email!");
                    break;
                }

                case 400: {
                    toast.error("Invlaid email or password!");
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
                <span className="text-lg text-gray-700 block text-center">Login To Your Acccount</span>
                <form ref={formRef} onSubmit={submitForm} className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="email" className="text-gray-800">
                            Email Address
                        </label>
                        <input type="email" id="email" name="email" className="p-2.5 rounded-md border border-gray-200 outline-none text-gray-700 focus:border-gray-300 transition-all" />
                        {fieldsError.email && <p className="text-sm text-rose-600 font-normal">{fieldsError.email[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="password" className="text-gray-800">
                            Password
                        </label>
                        <input type="password" id="password" name="password" className="p-2.5 rounded-md border border-gray-200 outline-none text-gray-700 focus:border-gray-300 transition-all" />
                        {fieldsError.password && <p className="text-sm text-rose-600 font-normal">{fieldsError.password[0]}</p>}
                    </div>
                    <button type="submit" className="bg-blue-600 text-white p-3 rounded-md block mt-2 hover:bg-blue-700 transition-all">
                        {isPending ? "Pending Request..." : "Login Now"}
                    </button>
                    <p className="text-gray-500 text-sm">
                        You Don&apost Have An Account?{" "}
                        <Link href="/auth/signup" className="text-blue-600">
                            SignUp
                        </Link>
                    </p>
                </form>
            </div>
            <Toaster />
        </div>
    );
}

export default Login;
