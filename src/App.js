import React, { Component } from 'react';
import {connect} from 'redux-zero/react'
import SignIn from "./signIn.js";
import {
  Grid,
  Row,
  Col,
  formGroup,
  FormControl,
  Button
} from "react-bootstrap";

import './App.css';


const App = ({boards}) => {
    return <div>
        
        <SignIn />


      </div>;

  }


const mapToProps = ({ boards }) => ({boards});

export default connect(mapToProps) (App);
