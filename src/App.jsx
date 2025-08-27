import { useState } from "react";
import "./App.css";

function App() {
  const [number, setnumber] = useState('0')
  const [numb1, setnumb1] = useState(0)
  const [operate, setoperate] = useState('')

  function writeNumb(clickedNumb){
    if(number==='0'){
      setnumber(clickedNumb)
    }
    else setnumber(number+clickedNumb)
  }

  function calculte(numb1,numb2,operate){
    if(operate==='total'){
      setnumber(parseFloat(numb1)+parseFloat(numb2))
    }
    else if(operate==='division'){
      setnumber(numb1/numb2)
    }
    else if(operate==='multiple'){
      setnumber(numb1*numb2)
    }
    else setnumber(numb1-numb2)
  }

  return (
    <>
      <div className="container">
        <div className="result_area">{number}</div>
        <div className="button_area">
          <div className="button_line">
            <div className="operation_buttons button" onClick={()=>setnumber('0')}>C</div>
            <div className="operation_buttons button" onClick={()=>setnumber(Math.sqrt(number))}>√</div>
            <div className="operation_buttons button" onClick={()=>setnumber(number/100)}>%</div>
            <div className="operation_buttons button" onClick={()=>{setoperate('division');setnumb1(number);setnumber('0')}}>÷</div>
          </div>
          <div className="button_line">
            <div className="button_numbers button" onClick={()=>writeNumb('7')}>7</div>
            <div className="button_numbers button" onClick={()=>writeNumb('8')}>8</div>
            <div className="button_numbers button" onClick={()=>writeNumb('9')}>9</div>
            <div className="operation_buttons button" onClick={()=>{setoperate('multiple');setnumb1(number);setnumber('0')}}>x</div>
          </div>
          <div className="button_line">
            <div className="button_numbers button" onClick={()=>writeNumb('4')}>4</div>
            <div className="button_numbers button" onClick={()=>writeNumb('5')}>5</div>
            <div className="button_numbers button" onClick={()=>writeNumb('6')}>6</div>
            <div className="operation_buttons button" onClick={()=>{setoperate('subtraction');setnumb1(number);setnumber('0')}}>-</div>
          </div>
          <div className="button_line">
            <div className="button_numbers button" onClick={()=>writeNumb('1')}>1</div>
            <div className="button_numbers button" onClick={()=>writeNumb('2')}>2</div>
            <div className="button_numbers button" onClick={()=>writeNumb('3')}>3</div>
            <div className="operation_buttons button" onClick={()=>{setoperate('total');setnumb1(number);setnumber('0')}}>+</div>
          </div>
          <div className="button_line line_5">
            <div className="button_numbers double_button button" onClick={()=>writeNumb('0')}>0</div>
            <div className="button_numbers button" onClick={()=>writeNumb('.')}>.</div>
          </div>
          <div className="button_line">
            <div className="operation_buttons double_button button" onClick={()=>calculte(numb1, parseFloat(number), operate)}>=</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
