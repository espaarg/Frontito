import '../../styles/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Footer =()=>{

    return (
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-4 my-2 border-top">
        <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                <img className="bi me-2" width="80" height="64" src="https://dbdzm869oupei.cloudfront.net/img/quadres/preview/42863.png" alt="dd" />
            </a>
            <p className="text-muted">© 2022</p>
        </div>

        <div className="col mb-3">
        </div>

        <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
        </div>

        <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
        </div>

        <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
        </div>
    </footer>
        
        
        // <footer className="bg-primary text-white text-center py-3">
        //     Este es el footer
        // </footer>
    );
}

export default Footer;