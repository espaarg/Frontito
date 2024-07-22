import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

const LogModalTab = ({ activeTab, onTabClick }) => {
    return (
        <Nav variant="tabs" activeKey={activeTab} onSelect={onTabClick}>
            <Nav.Item>
                <Nav.Link eventKey="signIn">Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="signUp">Sign Up</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

LogModalTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabClick: PropTypes.func.isRequired
};

export default LogModalTab;
