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
import MyBoards from './myboards.js';
import {selectBoard} from './actions.js'

const Boards = ({item, index, selectBoard}) => {
  return (
      <div>
        <Col md={3}>
            <div onClick={selectBoard} className="boards">
            <NavLink to="/myboards">
            {item.name}
            </NavLink>
            </div>    
        </Col>
     </div>
  );
};

const Board = ({ boards,selectItem }) => {
  return (
    <Grid className='board' >
      <Row>
        <h3>My boards</h3>
        {
        boards.map((item, index) => {
          return <Boards key={index} item={item} index={index} selectBoard={()=> selectBoard(index) }/>
        })
      }
      </Row>
    </Grid>
  );
};

const mapToProps = ({ boards, selectItem }) => ({ boards, selectItem });

export default connect(mapToProps)(Board);
