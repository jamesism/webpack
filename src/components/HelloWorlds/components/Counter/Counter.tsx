import React from "react";

export interface CounterProps {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Counter({ value, onIncrease, onDecrease }: CounterProps) {
  return (
    <div>
      <button type="button" onClick={onDecrease}>
        Subtract
      </button>
      <span>Value: {value}</span>
      <button type="button" onClick={onIncrease}>
        Add
      </button>
    </div>
  );
}
