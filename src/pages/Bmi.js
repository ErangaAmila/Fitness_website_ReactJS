import { useEffect, useState } from "react";
import '../stylingsheet/Bmi.css'
import BMIDown from '../images/BMI down.jpg'

export function Bmi(){
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBMI] = useState(0);

    function handleHeight(e){
        let h = e.target.value;
        setHeight(h);
    }

    function handleWeight(e){
        let w = e.target.value;
        setWeight(w);
    }

    //Handling the caculator
    useEffect(() => {
        let bmi1 = (weight/(height*height))*10000;
        setBMI(bmi1.toFixed(2));
    },[height,weight]);



    return(
        <div className="bmidiv">
            <h1 className="bmititle">Measure Your BMI Rate</h1>
            <p className="bmipara">Height(cm)</p><input className="bmiinputs" type="number" onChange={handleHeight}></input>
            <p className="bmipara">Weight(Kg)</p><input className="bmiinputs" type="number" onChange={handleWeight}></input>
            <h2 className="bmitotal">Your BMI: {bmi}</h2>
            <img src={BMIDown}/>
            
        </div>
        
    )
}