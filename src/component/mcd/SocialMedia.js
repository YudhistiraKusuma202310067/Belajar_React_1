import React from "react";
import Slider from "react-slick";
import { images } from "../../services/mcdLanding";

let SocialMedia = () => {
    return (
            <section>
                <div className="p-5" style={{backgroundColor : "#333333"}}>
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center justify-content-center">
                            <h1 className="text-light">Instagram McDonald's Indonesia</h1>
                        </div>
                        <div className="col-lg-5 d-flex align-items-center justify-content-center">
                            <div className="promo-button-wrapper">
                                <button type="button" className="btn btn-danger button-section">Ikuti @mcdonaldsid</button>
                            </div>
                        </div>
                    </div>
                    
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={5}
                        slidesToScroll={1}
                        responsive={[
                            {
                                breakpoint: 1000,
                                settings: {
                                    slidesToShow: 3
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 1
                                }
                            }
                        ]}
                    >
                        {images.map((img, i) => (
                            <div key={i} className="p-2">
                                <img src={img.image} alt={`img-${i}`} className="img-fluid rounded" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
    )
}

export default SocialMedia;