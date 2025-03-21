function Footer(){
    return(
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Red Cours Indore India</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 233 245 6785</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Services</h4>
                    <a className="btn btn-link" href="index.html">General Carpentry</a>
                    <a className="btn btn-link" href="index.html">Furniture Remodeling</a>
                    <a className="btn btn-link" href="index.html">Wooden Floor</a>
                    <a className="btn btn-link" href="index.html">Wooden Furniture</a>
                    <a className="btn btn-link" href="index.html">Custom Carpentry</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="index.html">About Us</a>
                    <a className="btn btn-link" href="index.html">Contact Us</a>
                    <a className="btn btn-link" href="index.html">Our Services</a>
                    <a className="btn btn-link" href="index.html">Terms & Condition</a>
                    <a className="btn btn-link" href="index.html">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="index.html">Tenders</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer;