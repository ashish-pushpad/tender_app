import './App.css';
import { Route,Routes } from 'react-router-dom';

import Topbar from './components/tobbar.js';
import Navbar from './components/navbar.js';
import CarouselComponent from './components/carousel.js';
import Content from './components/content.js';
import Form from './components/form.js';
import Footer from './components/footer.js';
import About from './components/About.js';
import Service from './components/Service.js';
import Project from './components/Project.js';
import Contact from "./components/Contact.js"

function App() {
    return (
        <>
            {/* Topbar Start */}
            <Topbar />
            {/* Topbar End */}


            {/* Navbar Start */}
            <Navbar />
            {/* Navbar End */}

            {/* Carousel Start */}
            <CarouselComponent />
            {/* Carousel End */}                   

            {/* about start */}
            <Routes>
                <Route path='/' element={<Content/>}> </Route>
                <Route path='/about' element={<About />}> </Route>
                <Route path='/service' element={<Service/>}> </Route> 
                <Route path='/project' element={<Project/>}> </Route>
                <Route path='/contact' element={<Contact/>}> </Route>
                <Route path='/ragistration' element={<Form />} ></Route>
                <Route path='/login' element={<Login />} ></Route>
            </Routes>
            {/* about end */}

            {/* Quote Start */}
            
            {/* Quote End  */}

            {/* Footer Start */}
            <Footer />
            {/* Footer End */}

            {/* Back to Top */}
            <a href="index.html" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up"></i></a>


            {/* JavaScript Libraries */}
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="./support/lib/wow/wow.min.js"></script>
            <script src="./support/lib/easing/easing.min.js"></script>
            <script src="./support/lib/waypoints/waypoints.min.js"></script>
            <script src="./support/lib/counterup/counterup.min.js"></script>
            <script src="./support/lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="./support/lib/isotope/isotope.pkgd.min.js"></script>
            <script src="./support/lib/lightbox/js/lightbox.min.js"></script>

            {/* Template Javascript */}
            <script src="./support/js/main.js"></script>
        </>
    );
}

export default App;
