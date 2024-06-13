import { useState } from "react";
import style from "./calculator.module.css";

export default function Calculator() {
  const [result, setResult] = useState('0');
  const [oldValue, setOldValue] = useState<number | null>(null);
  const [operator, setOperator] = useState('');

  function handleCalculator(e: any) {
    let num = e.target.value;

    if (result === '0') {
      setResult(num);
    } else {
      setResult(result + num);
    }
  }

  function clearAll() {
    setResult('0');
    setOldValue(null);
    setOperator('');
  }

  function percent() {
    let total = parseFloat(result) / 100;
    setResult(total.toString());
  }

  function handleResult() {
    if (oldValue === null || operator === '') {
      return;
    }

    let total = 0;
    const current = parseFloat(result);

    if (operator === '/') {
      total = oldValue / current;
    } else if (operator === '+') {
      total = oldValue + current;
    } else if (operator === '-') {
      total = oldValue - current;
    } else if (operator === '*') {
      total = oldValue * current;
    }

    setResult(Number(total).toString());
    setOldValue(null);
    setOperator('');
  }

  function handleOperation(e: any) {
    const operationSignal = e.target.value;

    if (oldValue === null) {
      setOldValue(parseFloat(result));
    } else {
      // Calcula o resultado com o operador atual antes de definir um novo operador
      let total = 0;
      if (operator === '/') {
        total = oldValue / parseFloat(result);
      } else if (operator === '+') {
        total = oldValue + parseFloat(result);
      } else if (operator === '-') {
        total = oldValue - parseFloat(result);
      } else if (operator === '*') {
        total = oldValue * parseFloat(result);
      }
      setOldValue(total);
      setResult(Number(total).toString());
    }

    setOperator(operationSignal);
    setResult('0');
  }

  return (
    <section className={style.calculator_container}>
      <div className={style.results}>
        <h2>{result}</h2>
        <h5>{oldValue !== null && oldValue}{operator}</h5>
      </div>
      <div className={style.keyboards_container}>
        <div className={style.box_1}>
          <button onClick={clearAll} style={{ backgroundColor: 'gray' }}>AC</button>
          <button style={{ backgroundColor: 'gray' }}>+/-</button>
          <button onClick={percent} style={{ backgroundColor: 'gray' }}>%</button>
          <button onClick={handleOperation} value={'/'} style={{ backgroundColor: 'orange' }}>/</button>
          <button onClick={handleCalculator} value={7}>7</button>
          <button onClick={handleCalculator} value={8}>8</button>
          <button onClick={handleCalculator} value={9}>9</button>
          <button onClick={handleOperation} value={'*'} style={{ backgroundColor: 'orange' }}>X</button>
          <button onClick={handleCalculator} value={4}>4</button>
          <button onClick={handleCalculator} value={5}>5</button>
          <button onClick={handleCalculator} value={6}>6</button>
          <button onClick={handleOperation} value={'-'} style={{ backgroundColor: 'orange' }}>-</button>
          <button onClick={handleCalculator} value={1}>1</button>
          <button onClick={handleCalculator} value={2}>2</button>
          <button onClick={handleCalculator} value={3}>3</button>
          <button onClick={handleOperation} value={'+'} style={{ backgroundColor: 'orange' }}>+</button>
        </div>
        <div className={style.box_2}>
          <button onClick={handleCalculator} value={0}>0</button>
          <button onClick={handleCalculator} value={'.'} style={{ backgroundColor: 'gray' }}>.</button>
          <button onClick={handleResult} style={{ backgroundColor: 'orange' }}>=</button>
        </div>
      </div>
    </section>
  );
}
