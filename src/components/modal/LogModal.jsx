/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import '../../styles/logModal.css';
import { useState, useEffect } from 'react';
import LogModalTab from '../tab/LogModalTab';


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
        <div className="modal-content">
            <LogModalTab onTabClick={handleTabClick} activeTab={activeTab} ></LogModalTab>
            <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };
  
  LogModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    tab: PropTypes.string // Validar la nueva prop title
  };
  

  export default LogModal;