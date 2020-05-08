import React, { Component } from 'react';

class Burger extends Component {
  render() {
    return (
      <button
        onClick={this.props.click}
        className='bg-transparent cursor-pointer flex flex-col justify-around w-8 h-6 p-0 pl-6 border-0-xs not-outlined'
      >
        <div className='bg-white h-2px w-7 br-30' />
        <div className='bg-white h-2px w-7 br-30' />
        <div className='bg-white h-2px w-7 br-30' />
      </button>
    );
  }
}

export default Burger;
