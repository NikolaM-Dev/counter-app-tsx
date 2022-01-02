import { useState } from 'react';

import './Counter.css';

interface Props {
  value?: number;
}

const Counter = ({ value = 0 }: Props): JSX.Element => {
  const [counter, setCounter] = useState<number>(value);

  const handleAdd = () => setCounter(counter + 1);
  const handleReset = () => setCounter(value);
  const handleSub = () => setCounter(counter - 1);

  return (
    <main className="counter">
      <h1 className="counter__heading">Counter App</h1>
      <h2 className="counter__value">{counter}</h2>
      <div className="counter__buttons">
        <button className="counter__btn" onClick={handleAdd}>
          +1
        </button>
        <button className="counter__btn" onClick={handleReset}>
          Reset
        </button>
        <button className="counter__btn" onClick={handleSub}>
          -1
        </button>
      </div>
    </main>
  );
};

export default Counter;
