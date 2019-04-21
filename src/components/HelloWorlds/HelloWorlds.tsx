import { hot } from "react-hot-loader/root";
import React from "react";
import style from "./HelloWorlds.scss";
import { Counter } from "./components/Counter";

export interface HelloWorldsState {
  currentValue: number;
}

class HelloWorldsComponent extends React.Component<{}, HelloWorldsState> {
  state = {
    currentValue: 1
  };

  handleIncrease = () =>
    this.setState(prevState => ({ currentValue: prevState.currentValue + 1 }));

  handleDecrease = () =>
    this.setState(prevState => ({ currentValue: prevState.currentValue - 1 }));

  render() {
    const { currentValue } = this.state;

    const worlds = new Array(currentValue).fill(1);

    return (
      <main>
        <Counter
          value={currentValue}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
        />
        {worlds.map((_, index) => (
          <h1 key={index} className={style.BlueHeader}>
            Hello world!!
          </h1>
        ))}
      </main>
    );
  }
}

export const HelloWorlds = hot(HelloWorldsComponent);
