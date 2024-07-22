/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import '../../styles/logModal.css';
import { useState, useEffect } from 'react';
import LogModalTab from '../tab/LogModalTab';
import Button from 'react-bootstrap/Button';


const LogModal = ({ closeModal, tab}) => {

    const [activeTab, setActiveTab] = useState(tab || 'signIn');

    useEffect(() => {
        setActiveTab(tab);
    }, [tab]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
      <div className="modal-overlay">
        <div className="modal-content" style={{display:'flex', flexDirection:'column',  alignItems:'center'}}>
            <div className="button-container">
                <Button className="Button" variant='dark' onClick={closeModal} style={{marginBottom:'20px'}}>X</Button>
            </div>
            <LogModalTab onTabClick={handleTabClick} activeTab={activeTab} ></LogModalTab>
            
        </div>
      </div>
    );
  };
  
  LogModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    tab: PropTypes.string // Validar la nueva prop title
  };
  

  export default LogModal;