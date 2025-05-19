import React from "react";

let Vacancy = () => {
    return (
            <section>
                <div className="banner-sikecil row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src="https://www.mcdonalds.co.id/assets/img/career/img_carrer_static.webp" className="img_home-birthday"/>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center div-inner-section">
                        <div>
                            <h1 className="inner-title-section">Ayo belajar dan bekerja bersama!</h1>
                            <p>di McDonald’s, kami lebih dari sekedar bisnis. Kami adalah komunitas tempat Anda berlatih keterampilan hidup dan sebagai wadah untuk mengejar serta mewujudkan impianmu.</p>
                            <button type="button" className="btn btn-danger button-section">Lihat Lowongan</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <p className="text-light">*Sesi pemotretan dilakukan dengan protokol kesehatan yang ketat dan karyawan telah divaksin dosis lengkap</p>
                    </div>
                </div>
            </section>
    )
}

export default Vacancy;