"use client"
import { useState } from "react";
import { Tab } from "../common/Tabs";
import { Position } from "@/types/framer.module";
import { motion } from "framer-motion";
import Link from "next/link";

export const SlideTabs = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    });
    return (
        <div className="">
            <ul
                onMouseLeave={() => {
                    setPosition((pv) => ({
                        ...pv,
                        opacity: 0,
                    }));
                }}
                className="relative mx-auto flex w-fit rounded-full bg-black p-1"
            >
                <Link href={"/"}><Tab setPosition={setPosition}>Home</Tab></Link>
                <Link href={"/ready-to-wear"}><Tab setPosition={setPosition}>Ready To Wear</Tab></Link>
                <Link href={"/bridal-wear"}><Tab setPosition={setPosition}>Bridals</Tab></Link>
                <Link href={"/"}><Tab setPosition={setPosition}>Contact Us</Tab></Link>
                <Link href={"/"}><Tab setPosition={setPosition}>Blog</Tab></Link>
                <Cursor position={position} />
            </ul>
        </div>
    );
};


const Cursor = ({ position }: { position: Position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-full bg-white gradient-to-tr from-black to-blue-950 md:h-12"
        />
    );
};