import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
    setResult('');
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString()); 
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator bg-gray-100 p-4 rounded-lg shadow-lg max-w-xs mx-auto mt-10">
      <div className="display bg-white rounded-lg shadow-md mb-4 p-4">
        <div className="input text-2xl font-mono text-gray-700 mb-1">{input}</div>
        <div className="result text-xl font-bold text-purple-500">{result}</div>
      </div>
      <div className="buttons grid grid-cols-4 gap-2">
        <button className="bg-red-400 text-white font-bold py-2 px-4 rounded" onClick={handleClear}>C</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('7')}>7</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('8')}>8</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('9')}>9</button>
        <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('/')}>/</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('4')}>4</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('5')}>5</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('6')}>6</button>
        <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('*')}>*</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('1')}>1</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('2')}>2</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('3')}>3</button>
        <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('-')}>-</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('0')}>0</button>
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => handleClick('.')}>.</button>
        <button className="bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={handleCalculate}>=</button>
        <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
