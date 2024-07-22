/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import '../../styles/logModal.css';
import { useState } from 'react';


const LogModal = ({ closeModal }) => {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };

    return (
      <div className="modal-overlay">
        <div className="modal-content">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab1')}
          >
            Pestaña 1
          </button>
          <button
            className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab2')}
          >
            Pestaña 2
          </button>
          <button
            className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab3')}
          >
            Pestaña 3
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'tab1' && <div className="content">Contenido de la Pestaña 1</div>}
          {activeTab === 'tab2' && <div className="content">Contenido de la Pestaña 2</div>}
          {activeTab === 'tab3' && <div className="content">Contenido de la Pestaña 3</div>}
        </div>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </div>
    );
  };
  
  LogModal.propTypes = {
    closeModal: PropTypes.func.isRequired
  };
  

  export default LogModal;