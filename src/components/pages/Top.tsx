import CategoryTabs from "../ui/CategoryTabs.tsx";
import PrimarySearchAppBar from "../ui/PrimarySearchAppBar.tsx";
import ProductCarousel from "../ui/ProductCarousel.tsx";
import React from "react";

const Top = () => {
    return (
        <div>
            <PrimarySearchAppBar />
            <CategoryTabs />
            <ProductCarousel />
        </div>
    );
};
export default Top;
