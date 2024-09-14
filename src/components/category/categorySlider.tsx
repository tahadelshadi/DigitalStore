"use client";
import { fetchCategory } from "@/fetchApi/categoryApi";
import { Category } from "@/interface/interfaces";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { slideLeft, slideRight } from "../../utils/horizontalScroll";
import CategoryCard from "./categoryCard";
import { useEffect, useRef, useState } from "react";
import { Button } from "../buttons/button";

const CategorySlider = () => {
  const [category, setCategory] = useState<Category[]>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const fetchCategoryList = async () => {
      const data = await fetchCategory();
      setCategory(data);
    };
    fetchCategoryList();
  }, []);

  if (!category) return <>loading...</>;

  return (
    <section id="category">
      <div className=" flex flex-row justify-between mb-6  no-scrollbar">
        <h1 className="title">Browse by Category</h1>
        <div className="flex flex-row gap-2">
          <Button
            variant="blue"
            aria-label="Scroll to Left Button"
            className="!p-2"
            onClick={slideLeft}>
            <BsArrowLeftShort size={20} />
          </Button>
          <Button
            variant="blue"
            aria-label="Scroll to Right Button"
            className="!p-2"
            onClick={slideRight}>
            <BsArrowRightShort size={20} />
          </Button>
        </div>
      </div>
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        id="cat-slide"
        className="flex flex-row gap-5 p-2 -m-2 justify-between overflow-scroll scrollbar-hide scroll-smooth select-none">
        {category.map((cat: Category) => (
          <CategoryCard category={cat} key={cat.id} />
        ))}
      </div>
    </section>
  );
};

export default CategorySlider;
