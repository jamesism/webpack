import { hot } from "react-hot-loader/root";
import React from "react";
import style from "./AnotherApp.scss";
import { Counter } from "./components/Counter";

export interface AnotherAppState {
  currentValue: number;
}

class AnotherAppComponent extends React.Component<{}, AnotherAppState> {
  state = {
    currentValue: 0
  };

  handleIncrease = () =>
    this.setState(prevState => ({ currentValue: prevState.currentValue + 1 }));

  handleDecrease = () =>
    this.setState(prevState => ({ currentValue: prevState.currentValue - 1 }));

  render() {
    const { currentValue } = this.state;

    return (
      <main>
        <h1 className={style.BlueHeader}>Hello world!! --AnotherApp!</h1>
        <Counter
          value={currentValue}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
        />
      </main>
    );
  }
}

export const AnotherApp = hot(AnotherAppComponent);
