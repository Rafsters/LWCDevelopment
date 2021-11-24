import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingComponent extends LightningElement {
    @track displayDiv = false;
    changeDivVisibility(event) {
        this.displayDiv = event.target.checked;
    }

    @track cityList = ['Krakow', 'Warszawa', 'Wroclaw'];
}