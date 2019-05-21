import React, { Component } from 'react';
import { Row, Col, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { HashRouter, Route, Link } from 'react-router-dom';

import MessageTable from "./MessageTable.js";
import Profile from './Profile.js';

const mainDivStyle = {
  maxWidth:"85rem", 
  margin:"auto", 
  padding:"1rem 2rem",
  backgroundColor:'var(--white)',
  border: "1px solid #d0d0d0",
  borderRadius:'8px',
}

const navColStyle = {
  borderRight: "1px solid #d0d0d0"
}


/**
 * Dashboard gives the user access to their profile and their messages.
 * The navbar on the left has links for navigating the dashboard, 
 * and the router on the right routes the current component.
 */
class Dashboard extends Component {
    render() {
      return (
        <div style={mainDivStyle}>
          <Row>
            {/* Side Nav */}
            <Col md="2" style={navColStyle}>
              <Navbar light>
              <Nav vertical navbar>
              <NavLink href='#dashboard'>Profile</NavLink>
              <NavLink href='#dashboard/messages'>Messages</NavLink>
              </Nav>
              </Navbar>
            </Col>
            {/* Routed Content */}
            <Col md="10">
              <HashRouter>
                <Route exact path='/dashboard' component={Profile} />
                <Route path='/dashboard/messages' component={MessageTable} />
              </HashRouter>
            </Col>
          </Row>
        </div>
      )
    }
  }
  
  export default Dashboard