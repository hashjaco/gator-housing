import React, { Component } from 'react';
import { 
  Navbar, NavbarBrand, NavbarToggler, 
  Nav, NavItem, NavLink, 
  Collapse, Form, Button,
  Input, InputGroup, InputGroupAddon
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const headerbarStyle = {
  boxShadow:"0 1px 4px 0 rgba(0,0,0,0.2)",
}

/**
 * The HeaderBar is placed at the top of every page. It contains
 * a search bar and links to other pages.
 */
class HeaderBar extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchQuery: "",
      isOpen: false,
    };
  }

  // For opening the HeaderBar menu on small screens
  toggle() {
    console.log("togglin");
    this.setState({
      open: !this.state.open
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // cleanQuery = this.state.searchQuery with spaces changed to +'s.
    let cleanQuery = this.state.searchQuery;
    cleanQuery = cleanQuery.replace(/\s+/g, '+');
    this.props.history.push("/search/" + cleanQuery);
  }

  render() {
    return (
      <>
        <Navbar color="white" expand="md" fixed={'top'} style={headerbarStyle} light>

          {/* Logo */}
          <NavbarBrand href='/'><span role='img' aria-label="gator">🐊</span>GatorHouse</NavbarBrand>

          {/* Search Bar */}
          <Form onSubmit={e => this.handleSubmit(e)} style={{marginRight:'0.5rem'}}>
            <InputGroup>
              <Input 
                name="search" 
                placeholder="Search" 
                onChange={e => this.setState({ searchQuery: e.target.value })}
              />
              <InputGroupAddon addonType="append">
                <Button color='success'><FaSearch/></Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* Other Buttons */}
            <Nav className="mr-auto d-flex align-items-center" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#post">Post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#signup">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>

        </Navbar>
      </>
    )
  }

}

export default withRouter(HeaderBar);