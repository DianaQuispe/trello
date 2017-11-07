import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./App.css";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import SignUp from "./signUp.js";

const Boards = ({boards}) => {
  return (
      <div>
        <Col md={3}>
            <div className="boards">
               {boards}
            </div>    
        </Col>
     </div>
  );
};

const Board = ({ boards }) => {
  return (
    <Grid className='board' >
      <Row>
        <h3>My boards</h3>
        <Boards boards={boards}/>
      </Row>
    </Grid>
  );
};

const mapToProps = ({ boards }) => ({ boards });

export default connect(mapToProps)(Board);
