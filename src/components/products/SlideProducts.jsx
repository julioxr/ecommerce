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
    const [index, setIndex] = useState(0);

    const handlePrevImg = () => {
        index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
    };
    const handleNextImg = () => {
        ARRAY_IMGS.length - 1 === index ? setIndex(0) : setIndex(index + 1);
    };

    return (
        <>
            <section className="grid md:grid-cols-4 md:gap-4">
                {/* Imagen principal */}
                <div className="relative col-span-4">
                    <img
                        src={ARRAY_IMGS[index]}
                        alt="Imagen principal de zapatillas"
                        className=" aspect-[16/13] w-full object-cover md:rounded-lg 2xl:max-h-[500px]"
                    />
                    {/* Botones del slide */}
                    <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between p-4">
                        <button
                            className=" grid h-10 w-10 place-items-center rounded-full bg-white pr-1"
                            onClick={handlePrevImg}
                        >
                            <PrevIcon />
                        </button>
                        <button
                            className=" grid h-10 w-10 place-items-center rounded-full bg-white"
                            onClick={handleNextImg}
                        >
                            <NextIcon />
                        </button>
                    </div>
                </div>
                {/* Imagenes debajo de la imagen grande */}
                <img
                    src={imgProductSmall1}
                    className="hidden rounded-lg md:block"
                />
                <img
                    src={imgProductSmall2}
                    className="hidden rounded-lg md:block"
                />
                <img
                    src={imgProductSmall3}
                    className="hidden rounded-lg md:block"
                />
                <img
                    src={imgProductSmall4}
                    className="hidden rounded-lg md:block"
                />
            </section>
        </>
    );
};

export default SlideProducts;
