"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LogoDarkScroll } from "../../public/images/assets.images";

const MotionImage = motion(Image);

export default function AvatarScroll()
{
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["10vh", "70vh"]);

    const [showBubble, setShowBubble] = useState(false);

    useEffect(() =>
    {
        let timeout;

        const handleScroll = () =>
        {
            setShowBubble(false);
            clearTimeout(timeout);

            timeout = setTimeout(() =>
            {
                setShowBubble(true);
            }, 3000);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed right-6 top-10 z-50 flex flex-col items-end">

            {/* Speech bubble */}
            {showBubble && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-3 bg-white text-black text-sm px-4 py-3 rounded-xl shadow-lg w-[200px]"
                >
                    <p className="font-semibold mb-2">
                        ☕ What would you like to do?
                    </p>

                    <div className="flex flex-col gap-2">



                        <a
                            href="#projects"
                            className="text-blue-600 hover:underline"
                        >
                            See my projects
                        </a>

                        <a
                            href="https://www.linkedin.com/in/gayane-vardanyan/"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            Visit LinkedIn
                        </a>

                        <a
                            href="https://github.com/gayanegrig"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            View GitHub
                        </a>

                    </div>
                </motion.div>
            )}
            <MotionImage
                src={LogoDarkScroll}
                alt="avatar"
                width={110}
                height={110}
                style={{ y }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

        </div>
    );
}