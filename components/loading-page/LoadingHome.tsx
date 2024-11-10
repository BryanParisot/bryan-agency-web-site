"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function LoadingHome() {
    const router = useRouter();
    const [showAnimation, setShowAnimation] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2500);

        const redirectTimer = setTimeout(() => {
            setShowAnimation(false);
            router.push("/");
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearTimeout(redirectTimer);
        };
    }, [router]);

    if (!showAnimation) return null;

    let text = "BRYAN PARISOT".split("");
    return (
        <AnimatePresence>
            <motion.div
                className='bg-red-50 w-full h-full top-0 fixed z-50 flex flex-col items-center justify-center'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: fadeOut ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                exit={{ scaleY: 0 }}
            >
                <div className='flex flex-row'>
                    {text.map((el: any, i: any) => (
                        <motion.p
                            className="text-primary text-3xl font-bold font-anton line tracking-widest sm:text-7xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.35,
                                delay: i / 15,
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.p>
                    ))}
                </div>
                <div>
                    <motion.div
                        className='bg-primary h-1 mt-10'
                        initial={{ width: 0 }}
                        animate={{ width: 400 }}
                        transition={{
                            delay: 1.20,
                            duration: 0.45
                        }}
                    ></motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default LoadingHome;
