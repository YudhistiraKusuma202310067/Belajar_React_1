import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingMcd.css";  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import HeroBanner from "../../component/mcd/HeroBanner";
import Promo from "../../component/mcd/Promo";
import Menu from "../../component/mcd/Menu";
import McdSection from "../../component/mcd/McdSection";
import SocialMedia from "../../component/mcd/SocialMedia";
import Vacancy from "../../component/mcd/Vacancy";
import Header from "../../component/HeaderFoother/Header";

let LandingMcd = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
                integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
                crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
                integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
                crossorigin="anonymous" />

            <Header/>
            <HeroBanner/>
            <Promo/>
            <Menu/>
            <McdSection/>
            <SocialMedia/>
            <Vacancy/>
        </>
    )
}

export default LandingMcd;