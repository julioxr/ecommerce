import { useState } from "react";

import NextIcon from "@/components/icons/NextIcon.jsx";
import PrevIcon from "@/components/icons/PrevIcon.jsx";

import imgProduct1 from "@/assets/image-product-1.jpg";
import imgProduct2 from "@/assets/image-product-2.jpg";
import imgProduct3 from "@/assets/image-product-3.jpg";
import imgProduct4 from "@/assets/image-product-4.jpg";

import imgProductSmall1 from "@/assets/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/image-product-4-thumbnail.jpg";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const SlideProducts = () => {
    const [currentImg, setCurrentImg] = useState("");
    return (
        <>
            <section className="grid md:grid-cols-4 md:grid-rows-2 md:gap-4">
                {/* Imagen principal */}
                <div className="relative col-span-4">
                    <img
                        src={imgProduct1}
                        alt="Imagen principal de zapatillas"
                        className=" aspect-[16/13] object-cover md:aspect-auto md:rounded-lg"
                    />
                    {/* Botones del slide */}
                    <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between p-4">
                        <button className=" grid h-10 w-10 place-items-center rounded-full bg-white pr-1">
                            <PrevIcon />
                        </button>
                        <button className=" grid h-10 w-10 place-items-center rounded-full bg-white">
                            <NextIcon />
                        </button>
                    </div>
                </div>
                {/* Imagenes debajo de la imagen grande */}
                <img
                    src={imgProductSmall1}
                    alt=""
                    className="hidden rounded-lg md:block"
                />
                <img
                    src={imgProductSmall2}
                    alt=""
                    className="hidden rounded-lg md:block"
                />
                <img
                    src={imgProductSmall3}
                    alt=""
                    className="hidden rounded-lg md:block"
                />
                <img
                    src={imgProductSmall4}
                    alt=""
                    className="hidden rounded-lg md:block"
                />
            </section>
        </>
    );
};

export default SlideProducts;
