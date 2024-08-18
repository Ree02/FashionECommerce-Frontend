import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";

export default function ProductCarousel() {
    // const items = [
    //     { title: "name1", img: "http://placehold.it/500x200" },
    //     { title: "name2", img: "http://placehold.it/500x200" },
    //     { title: "name3", img: "http://placehold.it/500x200" },
    //     { title: "name4", img: "http://placehold.it/500x200" },
    //     { title: "name5", img: "http://placehold.it/500x200" },
    //     { title: "name6", img: "http://placehold.it/500x200" },
    // ];
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };
    return (
        <>
            <Slider {...settings}>
                <div style={{ backgroundColor: "red" }}>
                    <h3>1</h3>
                </div>
                <div style={{ backgroundColor: "red" }}>
                    <h3>2</h3>
                </div>
                <div style={{ backgroundColor: "red" }}>
                    <h3>3</h3>
                </div>
                <div style={{ backgroundColor: "red" }}>
                    <h3>4</h3>
                </div>
                <div style={{ backgroundColor: "red" }}>
                    <h3>5</h3>
                </div>
                <div style={{ backgroundColor: "red" }}>
                    <h3>6</h3>
                </div>
            </Slider>
        </>
    );
}

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <ExpandCircleDownTwoToneIcon
            onClick={onClick}
            style={{
                ...style,
                display: "block",
                position: "absolute",
                color: "#486966",
                transform: "rotate(270deg)",
                zIndex: "9999",
                top: "35%",
                right: "10px",
            }}
        />
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <ExpandCircleDownTwoToneIcon
            onClick={onClick}
            style={{
                ...style,
                display: "block",
                position: "absolute",
                color: "#486966",
                transform: "rotate(90deg)",
                zIndex: "9999",
                top: "35%",
                left: "10px",
            }}
        />
    );
}
