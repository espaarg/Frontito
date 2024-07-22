import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      
      <div className="d-flex flex-column min-vh-100">
        <Header/>
            <div className="flex-grow-1">
                {/* Contenido de la página */}
            </div>
            <Footer />
        </div>

    </>
  )
}

export default App
