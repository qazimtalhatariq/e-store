import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import React, { FC } from "react";
import { oneProductType } from "../utils/ProductsDataArrayAndType";
import { client } from "../../sanity/lib/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const Card: FC<{ singleProductData: oneProductType }> = ({
  singleProductData,
}) => {
  return (
    <div className="max-w-sm min-w-[24rem] space-y-3  select-none hover:scale-110 duration-300">
      <div className="relative  w-full">
        <div className="absolute inset-0 z-10"></div>
        <Image
          width={1000}
          height={1000}
          src={urlFor(singleProductData.image[0])
            .width(1000)
            .height(1000)
            .url()}
          alt={singleProductData.image[0].alt}
        />
      </div>
      <div className="space-y-1 text-black text-center justify-center place-content-center items-center font-semibold text-lg select-none">
        <Link href="/">
          <h6>{singleProductData.productName}</h6>
          <p>${singleProductData.price}</p>
          <p className="text-sm text-red-600">
            {singleProductData.productTypes[0]}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
