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
// import {selectMenu} from './actions.js'
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import SignUp from "./signUp.js";
import {selectCard} from './actions.js'

const myBoards = ({ item, index }) => {
  return (
    <div>
      <Col md={3}>
        <div className='list'>
            <div className='card'>
                {item.todo}
            </div>
        </div>
      </Col>
    </div>
  );
};

const MyBoards = ({ boards,selectItem, selectCard }) => {
  return (
    <Grid className="board">
        {boards.name}
      <Row>
        {boards.map((item, index) => {
          return(                 
         <div>
            {/* <h3>{item.name}</h3>  */}
            {/* <myBoards key={index} item={item} index={index} />  */}
            </div> 
            ) 
        })}
      </Row>    
    </Grid>
  );
};

const mapToProps = ({ boards, selectItem, selectCard }) => ({ boards,selectItem, selectCard });

export default connect(mapToProps)(MyBoards);
