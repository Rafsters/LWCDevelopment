import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    @track currentResult;
    @track previousResults = [];
    @track showPreviousResults = false;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        }else if (inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addNumberHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = 'Result of ' + firstN + " + " + secondN + ' is ' + (firstN + secondN);
        this.previousResults.push(this.currentResult);
    }

    substractNumberHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = 'Result of ' + firstN + " - " + secondN + ' is ' + (firstN - secondN);
        this.previousResults.push(this.currentResult);
    }

    multiplyNumberHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = 'Result of ' + firstN + " * " + secondN + ' is ' + (firstN * secondN);
        this.previousResults.push(this.currentResult);
    }

    divideNumberHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = 'Result of ' + firstN + " / " + secondN + ' is ' + (firstN / secondN);
        this.previousResults.push(this.currentResult);
    }

    showPreviousResultsToggle(event){
        this.showPreviousResults = event.target.checked;
    }

}