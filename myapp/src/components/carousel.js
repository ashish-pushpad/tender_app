import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
function Spinner() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.getElementById('spinner')) {
        setIsLoading(false);
      }
    }, 1);
  }, []);
  return (
    <div id="spinner" className={` ${isLoading ? 'show' : 'hide'} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}>
      <div className={`spinner-grow text-primary`} style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const CarouselComponent = () => {
  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Infinite loop
    speed: 500,  // Transition speed
    slidesToShow: 1,  // Show 1 slide at a time
    slidesToScroll: 1,  // Scroll 1 slide at a time
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000,  // Set autoplay speed 

    // Custom navigation arrows
    prevArrow: (
      <div className="custom-arrow custom-prev-arrow">
        <i className="bi bi-chevron-left"></i>  {/* Left arrow icon */}
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow custom-next-arrow">
        <i className="bi bi-chevron-right"></i>  {/* Right arrow icon */}
      </div>
    ),
  };

  return (
    <>
      {/* spinner start */}
      <Spinner />
      {/* spinner  end */}
      <div className="container-fluid p-0 pb-5">
        <Slider {...settings} className="owl-carousel header-carousel position-relative">
          {/* Carousel Item 1 */}
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="/support/img/carousel-image1.png" alt="carousel-1" />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To TENDER's</h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">Best Tenders Services</h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                      </p>
                      <a href="index.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                      <a href="index.html" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Item 2 */}
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="/support/img/carousel-image2.png" alt="carousel-2" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To TENDER's</h5>
                    <h1 className="display-3 text-white animated slideInDown mb-4">Best Tenders Services</h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                    </p>
                    <a href="index.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                    <a href="index.html" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Item 3 */}
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="/support/img/carousel-image3.png" alt="carousel-3" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To TENDER's</h5>
                    <h1 className="display-3 text-white animated slideInDown mb-4">Best Tenders Services</h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                    </p>
                    <a href="index.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                    <a href="index.html" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more carousel items if needed */}
        </Slider>
      </div>
    </>
  );
};
export default CarouselComponent;