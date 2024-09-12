import './App.css';
import Numbers from './components/Numbers/Numbers.tsx';
import {useState} from 'react';

const App = () => {

  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const numbersDraw = numbers.map(number => {
    return (
        <Numbers number={number}/>
    );
  });

  const newNumbersBtn = () => {

      const numbersArray = [];

      const getRandomInt = (min:number, max:number) => {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      for (let i = 1; i < 15; i++) {
          const randomInt = getRandomInt(5, 36);
          numbersArray.push(randomInt);
      }

      const uniqueNumber = new Set(numbersArray);
      const uniqueArray = Array.from(uniqueNumber);
      const limitArray: number[] = uniqueArray.slice(-5);
      const newArray:number[] = [];
      for (let i = 0; i < limitArray.length; i++) {
          limitArray.sort((a, b) => a - b);
          newArray.push(limitArray[i]);
      }
        setNumbers(newArray);
  };

  return (
      <>
          <button onClick={newNumbersBtn} type="button" className="btn">New numbers</button>
          <div className="numbers">
              {numbersDraw}
          </div>
      </>
  );
};

export default App;
