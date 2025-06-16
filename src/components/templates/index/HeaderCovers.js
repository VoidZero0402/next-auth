"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const animation = { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.5 } };

function HeaderCovers() {
    return (
        <motion.div className="grid grid-cols-2 gap-4 w-full">
            <motion.div {...animation} className="h-[300px] w-full rounded-3xl overflow-hidden">
                <Image width={300} height={300} src="/covers/cover_13.jpg" alt="header image" className="size-full object-cover" />
            </motion.div>
            <motion.div {...animation} className="h-[300px] w-full rounded-3xl overflow-hidden">
                <Image width={300} height={300} src="/covers/cover_14.jpg" alt="header image" className="size-full object-cover" />
            </motion.div>
            <motion.div {...animation} className="h-[300px] w-full rounded-3xl overflow-hidden">
                <Image width={300} height={300} src="/covers/cover_15.jpg" alt="header image" className="size-full object-cover" />
            </motion.div>
            <motion.div {...animation} className="h-[300px] w-full rounded-3xl overflow-hidden">
                <Image width={300} height={300} src="/covers/cover_16.jpg" alt="header image" className="size-full object-cover" />
            </motion.div>
        </motion.div>
    );
}

export default HeaderCovers;
