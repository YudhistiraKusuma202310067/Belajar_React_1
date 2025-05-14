import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import "./LandingMcd.css";

let LandingMcd = () => {
    return (
        <jsx>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <img src="https://d2vuyvo9qdtgo9.cloudfront.net/assets/img/brand/logo_mcd.png" className="img-header-mcd" />
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Promo</a>
                        </li>
                        <li className="nav-item">
                            <img src="https://www.mcdonalds.co.id/assets/img/mop/img_mop-19.webp" className="img-header" />
                        </li>
                        <li className="nav-item">
                            <img src="https://www.mcdonalds.co.id/assets/img/movieclub/img_movieclub-1.webp" className="img-header" />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dunia Anak</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Berita Terkini</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Makin Kenal <br />Makin Sayang
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                <li><a className="dropdown-item" href="#">Produk Kami</a></li>
                                <li><a className="dropdown-item" href="#">Restoran Kami</a></li>
                                <li><a className="dropdown-item" href="#">Komitmen dan<br/> Tanggung Jawab<br/> Kami</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lokasi</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
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
                </div>
            </div>
            </div>

            <div>
                <h1 className="title-section">Promo Menarik</h1>
                <div className="card-promo">
                    <div className="card">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/promos/April2025/L1j9n6Kkr5FdW1QEvzXn.webp" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">BCA Hemat 25% Setiap Hari</h5>
                            <p class="card-text">Berlaku hingga 30 June 2025</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/promos/February2025/c8hqSUcCx1NgXKAUSsuR.webp" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Dinosaur McFlurry</h5>
                            <p class="card-text">McFlurry favoritmu kembali hadir</p>
                            <p class="card-text">Berlaku hingga 01 June 2025</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/promos/May2025/W03rTa6V75fvgt3Q5l1h.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Rebo Hemat dengan McDelivery</h5>
                            <p class="card-text">5 Ayam Krispy McD hanya Rp55.000</p>
                            <p class="card-text">Berlaku hingga 28 May 2025</p>
                        </div>
                    </div>
                </div>
                <div className="promo-button-wrapper">
                    <button type="button" className="btn btn-danger button-section">Lihat Semua Promo</button>
                </div>
            </div>

            <div className="menu-fav-section">
                <h1 className="title-section">Menu Favorit</h1>
                <div className="card-promo">
                    <div className="card card-menu">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/foods/October2023/S2b8K7g2tM6cDksrAdVv.webp" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title card-menu-title">Big Mac®</h5>
                        </div>
                    </div>
                    <div className="card card-menu">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/foods/October2023/zdp0LhOduHDNXVYWILMx.webp" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title card-menu-title">PaNas 1</h5>
                        </div>
                    </div>
                    <div className="card card-menu">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/foods/October2023/Mdfc31HLjuorHac10yKX.webp" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title card-menu-title">Panas Spesial</h5>
                        </div>
                    </div>
                    <div className="card card-menu">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/foods/November2023/P2zG2zY5Z7dory0BUYfc.webp" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title card-menu-title">McChicken</h5>
                        </div>
                    </div>
                    <div className="card card-menu">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/foods/October2023/ce7g1MMi3D7YNWGH3iuK.webp" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title card-menu-title">McNuggets®</h5>
                        </div>
                    </div>
                </div>
                <div className="promo-button-wrapper">
                    <button type="button" className="btn btn-danger button-section">Lihat Semua Menu</button>
                </div>
            </div>

            <img src="https://www.mcdonalds.co.id/assets/img/mop/img_home-mop-3.webp" className="img-rewards"/>

        </jsx>
    )
}

export default LandingMcd;