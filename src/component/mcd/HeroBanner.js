import React from "react";
import {banner} from "../../services/mcdLanding";

let HeroBanner = () => {
    console.log(banner);

    return (
            <section>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        {banner?.map(x => {
                            return(
                                <div class="carousel-item active" key={x.id}>
                                    <img class="d-block w-100" src={x.source} alt="First slide"/>
                                </div>
                            )
                        })}
                        {/* <div class="carousel-item active">
                            <img class="d-block w-100" src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/April2025/bZBqwzU0hPuyF96I61U2.webp" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/May2025/OzEhBotMVOgtl123fHXn.jpg" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/April2025/WEsaV6Ercw4ZWq0FpJGy.webp" alt="Third slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/May2024/rIfkVUiRlgc5hJjCYBLH.webp" alt="Forth slide"/>
                        </div> */}
                    </div>
                </div>
            </section>
    )
}

export default HeroBanner;