import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    weight: ["300", "500", "700"],
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} bg-gray-50`}>{children}</body>
        </html>
    );
}
