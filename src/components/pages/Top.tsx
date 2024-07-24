import CategoryTabs from "../ui/CategoryTabs.tsx";
import PrimarySearchAppBar from "../ui/PrimarySearchAppBar.tsx";
import React from "react";

const Top = () => {
    return (
        <div>
            <PrimarySearchAppBar />
            <CategoryTabs />
        </div>
    );
};
export default Top;
