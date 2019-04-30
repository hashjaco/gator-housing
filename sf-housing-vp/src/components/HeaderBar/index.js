import './index.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse, 
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';



class HeaderBar extends Component {
  constructor(props) {
    super(props);

    this.toggleOpen = this.toggleOpen.bind(this);
    this.state = {
      open: false
    };
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <Navbar className='main-navbar flex-nowrap bg-white' light expand='md' fixed={'top'} >

          {/* Logo */}
          <NavbarBrand href='/'><span role='img' aria-label="gator">🐊</span> GatorHouse</NavbarBrand>

          {/* Link Buttons */}
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.open} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/post">Post</NavLink>
              </NavItem>
              <NavItem style={{paddingLeft:"0.5rem"}}>
                <Button color="success" tag={Link} to="/login">Login</Button>
              </NavItem>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/dashboard">
                    Dashboard
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/about">
                    About
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }

}

export default HeaderBar;