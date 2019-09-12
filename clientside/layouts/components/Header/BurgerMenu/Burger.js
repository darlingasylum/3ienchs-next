import React, { Component } from "react";
// import style from "./burger.module.css";

class Burger extends Component {
  test() {
    console.log("coucou");
  }

  render() {
    return (
      <button
        onClick={this.props.click}
        className="bg-transparent cursor-pointer flex flex-col justify-around w-8 h-6 p-0 border-0-md border-0-xs not-outlined"
      >
        <div className="bg-white h-2px w-7 br-30" />
        <div className="bg-white h-2px w-7 br-30" />
        <div className="bg-white h-2px w-7 br-30" />
      </button>
    );
  }
}

export default Burger;
