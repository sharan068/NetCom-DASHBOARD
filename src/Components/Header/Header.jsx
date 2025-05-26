import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.css';

function HeaderComponent() {
  return (
    <Navbar expand="md" className="nav_main">
      <Container fluid className="header-container">
        <div className="logo" />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="collapsed-content">
            <input
              placeholder="Search"
              type="text"
              className="main_search"
            />

            <Nav className="nav_right_items">
              <img
                className="icon notIcons"
                src="/src/assets/Images/Group 11061.png"
                alt="notification"
              />
              <img
                className="icon cartIcon"
                src="/src/assets/Images/Group 11013.png"
                alt="cart"
              />
              <div className="user_section">
                <img
                  className="icon userIcon"
                  src="/src/assets/Images/UserIcon.png"
                  alt="user"
                />
                <p className="user_name">R. Spenser</p>
                <ArrowDropDownIcon />
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
