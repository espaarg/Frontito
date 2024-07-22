import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import SignInForm from '../form/SignInForm';
import SignUpForm from '../form/SignUpForm';

const LogModalTab = ({ activeTab, onTabClick }) => {
    return (
        <>
        <div style={{width:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Nav variant="tabs" activeKey={activeTab} onSelect={onTabClick}>
                <Nav.Item>
                    <Nav.Link eventKey="signIn">Sign In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="signUp">Sign Up</Nav.Link>
                </Nav.Item>
             </Nav>
             <div>
                {activeTab === 'signIn' && <SignInForm />}
                {activeTab === 'signUp' && <SignUpForm />}
             </div>
        </div>
        </>
    );
};

LogModalTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabClick: PropTypes.func.isRequired
};

export default LogModalTab;
