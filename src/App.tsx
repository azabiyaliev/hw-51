import './App.css';
import Numbers from './components/Numbers/Numbers.tsx';
import {useState} from 'react';

const App = () => {

  const [numbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const numbersDraw = numbers.map(number => {
    console.log(number);
    return (
        <Numbers number={number}/>
    );
  });

  return (
      <>
        <div className="numbers">
          {numbersDraw}
        </div>
      </>
  );
};

export default App;
