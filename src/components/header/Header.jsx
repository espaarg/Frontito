import Button from 'react-bootstrap/Button';
import LogModal from "../modal/LogModal";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    //MODAL LOG
    const [modalLog, setModalLog] = useState(false);
    const openModal = (type) => {
        return () => {
            setStartModal(type);
            setModalLog(true);
        };
    };
    
    const closeModal = () => setModalLog(false);

    const [startModal, setStartModal] = useState("signIn");

    return (
    <>
        <div className="header">
            <h1>My Blog</h1>
            {/* Botón que abre el modal */}
            <Button onClick={openModal("signIn")}>Sign In</Button>
            <Button onClick={openModal("signUp")}>Sign Up</Button>
            {/* Renderiza el modal si modalLog es true */}            
            {modalLog && <LogModal closeModal={closeModal} tab={startModal} />}
        </div>
        <header>
            
        </header>
    </>
    )
}

export default Header;