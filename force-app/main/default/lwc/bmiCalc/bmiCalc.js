import { LightningElement, track } from 'lwc';

export default class BmiCalc extends LightningElement {

    cardTitle = "BMI Calculator";

    @track bmiData = {
        weight : 0,
        height : 0,
        result : 0
    }

    weight;
    height;

    bmi;
    onWeightChange(event){
        this.bmiData.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.bmiData.height = parseFloat(event.target.value);
    }

    calculateBMI(){
        this.bmiData.result = this.bmiData.weight / (this.bmiData.height * this.bmiData.height);
    }

    get bmiValue(){
        if(this.bmiData.result === 0 || this.bmiData.result === undefined){
            return "";
        }else{
            return 'Your BMI is ' + this.bmiData.result;
        }
    }
}