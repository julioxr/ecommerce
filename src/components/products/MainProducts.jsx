import React from "react";
import DetailProducts from "@/components/products/DetailProducts";
import SlideProducts from "@/components/products/SlideProducts";

const MainProducts = () => {
    return (
        <main className="grid grid-cols-1 gap-8 md:min-h-[calc(100vh-89px)] md:grid-cols-2 ">
            <SlideProducts />
            <DetailProducts />
        </main>
    );
};

export default MainProducts;
