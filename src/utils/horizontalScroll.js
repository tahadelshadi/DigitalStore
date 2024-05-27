'use client'

export const slideLeft = () => {
    let slider = document.getElementById("cat-slide");
    slider.scrollLeft = slider.scrollLeft - 244;
};
export const slideRight = () => {
    let slider = document.getElementById("cat-slide");
    slider.scrollLeft = slider.scrollLeft + 244;
};
