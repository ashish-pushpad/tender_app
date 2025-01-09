
function Topbar(){
    return(
<div className="container-fluid bg-light p-0">
<div className="row gx-0 d-none d-lg-flex">
    <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small id="location"className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>abhay prashal,Indore, India</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock text-primary me-2"></small>
            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
        </div>
    </div>
    <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>+91 70707 34326</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-sm-square bg-white text-primary me-1" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="https://x.com/"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="https://in.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-0" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        </div>
    </div>
</div>
</div>
    )
}
export default Topbar;
