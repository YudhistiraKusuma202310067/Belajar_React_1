import React from "react";

let McdSection = () => {
    return (
                    <section>
                <img src="https://www.mcdonalds.co.id/assets/img/mop/img_home-mop-3.webp" className="img-rewards"/>
                <img src="https://www.mcdonalds.co.id/assets/img/mop/img_home-mop-2.webp" className="img-rewards"/>

                <div className="banner-sikecil row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/assets/img/home/img_home-birthday.webp" className="img_home-birthday"/>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center div-inner-section">
                        <div>
                            <h1 className="inner-title-section">Ciptakan momen bahagia<br/> untuk si kecil</h1>
                            <p>Semua hal seru hanya ada di Dunia Anak McDonald's</p>
                            <button type="button" className="btn btn-danger button-section">Pelajari Selengkapnya</button>
                        </div>
                    </div>
                </div>

                <div className="row p-5">
                    <div className="col-lg-6 d-flex align-items-center div-inner-section">
                        <div>
                            <h1 className="inner-title-section">Makin Hemat & Praktis dengan Aplikasi McDonald’s. Download Sekarang!</h1>
                            <div>
                                <img className={"btn-download"} src="https://www.mcdonalds.co.id/assets/img/common/button_appstore.png"/>
                                <img className={"btn-download"} src="https://www.mcdonalds.co.id/assets/img/common/button_playstore.png"/>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src="https://d2vuyvo9qdtgo9.cloudfront.net/app-section-footers/October2024/nQ7nOWJhpxMXx9OzFLGq.webp" className="img_home-birthday"/>
                    </div>
                </div>
            </section>
    )
}

export default McdSection;