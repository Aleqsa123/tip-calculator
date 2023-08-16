import {useState} from 'react';
import styles from './App.module.css';

function App() {

const [inputs, setInputs] = useState({});

const handleChangeBP = (event) => {
  const name = event.target.name;
  const value = Number(event.target.value);
  setInputs(values => ({...values, [name]: value}))
}

const handleChange = (event) => {
  const name = event.target.name;
  const value = Number(event.target.value);
  inputs.custom = "";
  setInputs(values => ({...values, [name]: value}))
}

const handleChangeCustom = (event) => {
  const name = event.target.name;
  const value = Number(event.target.value);
  inputs.tip = value;
  setInputs(values => ({...values, [name]: value}))
}

  return (
    <div className={styles.mainDiv}>
      <img src='./images/logo.svg' alt="logo splitter" />
      <form>
          <h2>Bill:</h2>
          <input 
            type="text" 
            name="billamount" 
            className={styles.billamount}
            value={inputs.billamount || ""} 
            placeholder='0'
            onChange={handleChangeBP}
          />

          <h2>Select Tip %</h2>
          <div className={styles.tipsDiv}>
            <button className={styles.percentbtn} type="button" name="tip" value={5} onClick={handleChange}>5%</button>
            <button className={styles.percentbtn} type="button" name="tip" value={10} onClick={handleChange}>10%</button>
            <button className={styles.percentbtn} type="button" name="tip" value={15} onClick={handleChange}>15%</button>
            <button className={styles.percentbtn} type="button" name="tip" value={25} onClick={handleChange}>25%</button>
            <button className={styles.percentbtn} type="button" name="tip" value={50} onClick={handleChange}>50%</button>

            <input 
              type="text" 
              name="custom" 
              className={styles.custom}
              value={inputs.custom || ""}
              placeholder='Custom'
              onChange={handleChangeCustom}
            />
        </div>

        <div>
        <h2>Number of People <span className={styles.zero}>can't be zero</span></h2>
            <input 
              type="text" 
              name="people"
              className={styles.peopleamount} 
              value={inputs.people || ""} 
              placeholder='0'
              onChange={handleChangeBP}
            />
        </div>

        <div>
        <p> Tip Amount <span>/ person</span> </p>
        <p>{inputs.people > 0 ? ((inputs.billamount*inputs.tip/100)/inputs.people).toFixed(2) : "0.00"}</p>

        <p> Total <span>/ person</span></p>
        <p>{inputs.people > 0 ? (((inputs.billamount*inputs.tip/100)+inputs.billamount)/inputs.people).toFixed(2) : "0.00"} </p>

        <input type="reset" name="Reset" onClick={() => setInputs({})} />

        </div>     
      </form>
      </div>
)}

export default App;    