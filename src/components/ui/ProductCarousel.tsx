import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";

export default function ProductCarousel() {
    const items = [
        { title: "name1", img: "/img/pr1.png" },
        { title: "name2", img: "/img/pr2.png" },
        { title: "name3", img: "/img/pr3.png" },
        { title: "name4", img: "/img/pr4.png" },
        { title: "name5", img: "/img/pr5.png" },
        { title: "name6", img: "/img/pr6.png" },
    ];
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        className: "center",
        centerMode: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        initialSlide: 0,
    };
    return (
        <>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
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
