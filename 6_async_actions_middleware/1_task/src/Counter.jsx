import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './counter.actions';

class Counter extends Component {
  render = () => {
    const { counter, onIncrement, onDecrement, onReset } = this.props;
    return (
      <div className="counter">
        <button className="counter__button" onClick={() => onDecrement()}>
          -
        </button>
        <span className="counter__value" onClick={() => onReset()}>
          {counter}
        </span>
        <button className="counter__button" onClick={() => onIncrement()}>
          +
        </button>
      </div>
    );
  };
}

const mapState = state => ({
  counter: state.counter,
});

const mapDispatch = {
  onIncrement: increment,
  onDecrement: decrement,
  onReset: reset,
};

export default connect(mapState, mapDispatch)(Counter);
