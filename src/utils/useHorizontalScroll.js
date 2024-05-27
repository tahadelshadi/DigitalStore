'use client'
import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return elRef;
}

export const slideLeft = () => {
    let slider = document.getElementById("cat-slide");
    slider.scrollLeft = slider.scrollLeft - 244;
};
export const slideRight = () => {
    let slider = document.getElementById("cat-slide");
    slider.scrollLeft = slider.scrollLeft + 244;
};
