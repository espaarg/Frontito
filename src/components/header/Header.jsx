import LogModal from "../modal/LogModal";
import { useState } from "react";

const Header = () => {

    //MODAL LOG
    const [modalLog, setModalLog] = useState(false);
    const openModal = () => setModalLog(true);
    const closeModal = () => setModalLog(false);

    return (
    <>
        <div className="header">
            <h1>My Blog</h1>
            <button onClick={openModal}>Sing Up</button>
            <button onClick={openModal}>Sing In</button>
            {modalLog && <LogModal closeModal={closeModal} />}
        </div>
        <header>
            
        </header>
    </>
    )
}

export default Header;