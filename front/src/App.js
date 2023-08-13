import  {useState} from 'react';
import './App.css';
import {} from './components/styled-components';

function App() {

const [inputs, setInputs] = useState({});

const handleChange = (event) => {
  const name = event.target.name;
  const value = Number(event.target.value);
  setInputs(values => ({...values, [name]: value}))
}

const handleSubmit = (event) => {
  event.preventDefault();
  alert(inputs);
}
  return (
    <div className="App">
      <form /*onSubmit={handleSubmit}*/>
        <div>
          <h2>Bill:</h2>
          <label>
          <input 
            type="text" 
            name="billamount" 
            value={inputs.billamount || ""} 
            placeholder='$                    0'
            onChange={handleChange}
          />
          </label>
        </div>

        <div>
          <h2>Select Tip %</h2>
            <button type="button" name="tip" value={5} onClick={handleChange}>5%</button>
            <button type="button" name="tip" value={10} onClick={handleChange}>10%</button>
            <button type="button" name="tip" value={15} onClick={handleChange}>15%</button>
            <button type="button" name="tip" value={25} onClick={handleChange}>25%</button>
            <button type="button" name="tip" value={50} onClick={handleChange}>50%</button>

            <input 
              type="text" 
              name="tip" 
              value={inputs.tip || ""}
              placeholder='Custom'
              onChange={handleChange}
            />
        </div>

        <div>
        <h2>Number of People</h2>
          <label>
            <input 
              type="text" 
              name="people" 
              value={inputs.people || ""} 
              placeholder='0'
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
        <p> Tip Amount <span>/ person</span> </p>
          <p>$ {((inputs.billamount*inputs.tip/100)/inputs.people).toFixed(2) || "0.00"} </p>

          <p> Total <span>/ person</span></p>
          <p>${(((inputs.billamount*inputs.tip/100)+inputs.billamount)/inputs.people).toFixed(2) || "0.00"}</p> 
          
        <input type="reset" name="Reset" onClick={() => setInputs({})} />

        </div>     
      </form>
    </div>
)}

export default App;    