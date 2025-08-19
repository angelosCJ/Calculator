import { useState } from 'react';
import './App.css';


function App() {
  const [display, setDisplay] = useState<string>(""); 
  const [num1, setNum1] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const clearDisplay = () => {
    setDisplay("");
  }

  const backSpace = () => {
   if (display.length > 0) {
    setDisplay(display.slice(0,-1));
   }
  }
  
  const handleNumberClick = (value: string) => {
      setDisplay((prev) => prev + value);
  };

 const powerTwo = () => {
   const number = parseFloat(display);
   const raisedByTwo = number * number;
   setDisplay(raisedByTwo.toString());
 }

 const logBase10 = () => {
   const number = parseFloat(display);
   const logarithm = Math.log10(number);
   setDisplay(logarithm.toString());
 }

 const naturalLog = () => {
    const number = parseFloat(display);
    const natural = Math.log(number);
    setDisplay(natural.toString());
 }

 const squareRoot = () => {
   const number = parseFloat(display);
   const rootNumber =   Math.sqrt(number);
   setDisplay(rootNumber.toString());
 }

 const percentage = () => {
   const number = parseFloat(display);
   const percentNumber = number/100;
   setDisplay(percentNumber.toString());
 }

 const sinValue = () => {
   const number = parseFloat(display);
   const sinOfNumber = Math.sin(number);
   setDisplay(sinOfNumber.toString());
 }

  const cosValue = () => {
   const number = parseFloat(display);
   const cosOfNumber = Math.cos(number);
   setDisplay(cosOfNumber.toString());
 }

  const tanValue = () => {
   const number = parseFloat(display);
   const tanOfNumber = Math.tan(number);
   setDisplay(tanOfNumber.toString());
 }

 const plusMinus = () => {
   const number = parseFloat(display);
   const positiveOrNegative = number * -1;
   setDisplay(positiveOrNegative.toString());
 }
 
  const handleOperatorClick = (op: string) => {
    if (display !== "") {
      setNum1(parseFloat(display)); 
      setOperator(op); 
      setDisplay(""); 
    }
  };

   const handleEquals = () => {
    if (num1 !== null && operator && display !== "") {
      const num2 = parseFloat(display);
      let result = 0;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;

         case "-":
          result = num1 - num2;
          break;

           case "x":
          result = num1 * num2;
          break;

           case "÷":
          result = num1 / num2;
          break;

        default:
        result = num1;
          break;
      }
      const num = result;
      const formatted = Number(num).toLocaleString(); 
      setDisplay(formatted);
      setNum1(null);
      setOperator(null);
    }
  };

  return (
    <>
      <div className='frame'>
       <div className="card">
        <div className="display">
          <div className="displayText"> {display} </div>
        </div>
        <div className="buttonsPanel">
            <div className="gridOne">
            <div onClick={clearDisplay} className="button C">C</div>
            <div onClick={backSpace} className="button B">B</div>
            <div onClick={()=>handleNumberClick("3.14159292")} className="button Pi">π</div>
            <div onClick={powerTwo} className="button power2">^2</div>
          </div>
          <div className="gridOne">
            <div onClick={logBase10} className="button log">log</div>
            <div onClick={naturalLog} className="button ln">ln</div>
            <div onClick={squareRoot} className="button rootSquare">√</div>
            <div onClick={percentage} className="button percent">%</div>
          </div>
            <div className="gridOne">
            <div onClick={sinValue} className="button sin">sin</div>
            <div onClick={cosValue} className="button cos">cos</div>
            <div onClick={tanValue} className="button tan">tan</div>
             <div onClick={() => handleOperatorClick("÷")}className="button operation÷"> ÷ </div>
          </div>
            <div className="gridOne">
           <div onClick={()=>handleNumberClick("7")} className="button seven">7</div>
            <div onClick={()=>handleNumberClick("8")} className="button eight">8</div>
            <div onClick={()=>handleNumberClick("9")} className="button nine">9</div>
             <div onClick={() => handleOperatorClick("x")} className="button operationx"> x </div>
          </div>
            <div className="gridOne">
            <div onClick={()=>handleNumberClick("4")} className="button four">4</div>
            <div onClick={()=>handleNumberClick("5")} className="button five">5</div>
            <div onClick={()=>handleNumberClick("6")} className="button six">6</div>
             <div onClick={() => handleOperatorClick("-")} className="button operation-"> - </div>
          </div>
            <div className="gridOne">
            <div onClick={()=>handleNumberClick("1")} className="button one">1</div>
            <div onClick={()=>handleNumberClick("2")} className="button two">2</div>
            <div onClick={()=>handleNumberClick("3")} className="button three">3</div>
             <div onClick={() => handleOperatorClick("+")} className="button operationPlus">+</div>
          </div>
            <div className="gridOne">
            <div onClick={()=>handleNumberClick("0")} className="button zero">0</div>
            <div onClick={plusMinus} className="button p/n">+/-</div>
            <div onClick={()=>handleNumberClick(".")} className="button dot">.</div> 
              <div onClick={handleEquals} className="button equals"> = </div>
          </div>
        </div>
       </div>
      </div>

    </>
  )
}

export default App
