import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="result_area">0</div>
        <div className="button_area">
          <div className="button_line">
            <div className="operation_buttons button">C</div>
            <div className="operation_buttons button">√</div>
            <div className="operation_buttons button">%</div>
            <div className="operation_buttons button">÷</div>
          </div>
          <div className="button_line">
            <div className="button_numbers button">7</div>
            <div className="button_numbers button">8</div>
            <div className="button_numbers button">9</div>
            <div className="operation_buttons button">x</div>
          </div>
          <div className="button_line">
            <div className="button_numbers button">4</div>
            <div className="button_numbers button">5</div>
            <div className="button_numbers button">6</div>
            <div className="operation_buttons button">-</div>
          </div>
          <div className="button_line">
            <div className="button_numbers button">1</div>
            <div className="button_numbers button">2</div>
            <div className="button_numbers button">3</div>
            <div className="operation_buttons button">-</div>
          </div>
          <div className="button_line line_5">
            <div className="button_numbers double_button button">0</div>
            <div className="button_numbers button">.</div>
          </div>
          <div className="button_line">
            <div className="operation_buttons double_button button">=</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
