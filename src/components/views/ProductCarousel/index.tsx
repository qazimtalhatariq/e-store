"use client";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { Component, FC, ReactNode } from "react";
import Card from "../Card";

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({
  ProductData,
}) => {
  let initialX: number;
  let isDragging = false;
  let tabBox: any;

  const isBrowser = () => typeof window !== "undefined";

  if (isBrowser()) {
    tabBox = document.querySelector(".scrollGrab");
  }

  // Desktop functions
  function mouseMoves(e: any) {
    if (!isDragging) return;
    if (tabBox) {
      tabBox.scrollLeft -= e.movementX;
    }
  }
  function mouseDown() {
    isDragging = true;
  }
  function mouseUp() {
    isDragging = false;
  }

  // mobile functions
  function mouseMovesForMobile(e: any) {
    if (!isDragging) return;
    if (tabBox) {
      var currentX = e.touches[0].clientX;
      var movementX = currentX - initialX;
      tabBox.scrollLeft -= movementX / 5;
    }
  }
  function mouseDownForMobile(e: any) {
    isDragging = true;
    initialX = e.touches[0].clientX;
  }
  let dataToItrate = ProductData.slice(0, 15);

  return (
    <div className="space-y-4">
      <div className="text-center space-y-3">
        <p className="text-red-600 text-sm">PRODUCTS</p>
        <h3 className="text-3xl text-black font-bold">Check What We Have</h3>
      </div>
      <div
        onMouseMove={mouseMoves}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        className="select-none flex gap-4 overflow-x-hidden scrollGrab py-4 overflow-y-hidden"
        onTouchMove={mouseMovesForMobile}
        onTouchStart={mouseDownForMobile}
        onTouchEnd={mouseUp}
      >
        {dataToItrate.map((item: oneProductType, index: number) => (
          <Card key={index + 4} singleProductData={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
