import React from "react";

let Menu = () => {
    return (
            <section>
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
            </section>
    )
}

export default Menu;