import { Position } from "@/types/framer.module";
import { Dispatch, SetStateAction, useRef } from "react";

export const Tab = ({
    children,
    setPosition,
}: {
    children: string;
    setPosition: Dispatch<SetStateAction<Position>>;
}) => {
    const ref = useRef<null | HTMLLIElement>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 font-link uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            {children}
        </li>
    );
};
