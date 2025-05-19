import React from "react";
import { promo } from "../../services/mcdLanding";

let Promo = () => {
    return (
            <section>
                <div>
                    <h1 className="title-section">Promo Menarik</h1>
                    <div className="card-promo">
                        {promo?.map(x => {
                            return(
                                <div className="card" key={x.id}>
                                    <img src={x.source} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{x.title}</h5>
                                        <p class="card-text">{x.description}</p>
                                        <p class="card-text">{x.validUntil}</p>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className="card">
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
                        </div> */}
                    </div>
                    <div className="promo-button-wrapper">
                        <button type="button" className="btn btn-danger button-section">Lihat Semua Promo</button>
                    </div>
                </div>
            </section>
    )
}

export default Promo;