import React, { Component } from 'react';
import Calculator from "./calculator";
// import CalculatorKey from "calculatorKey";
// import CalcualtorDisplay from "calculatorDisplay";
// import AutoScalingText from "autoScalingText"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <Calculator />
        {/* <CalculatorKey />
        <CalcualtorDisplay />
        <AutoScalingText /> */}
      </div>
    );
  }
}
