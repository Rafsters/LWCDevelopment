import { api, LightningElement } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    value = ['red'];

    options = [
            { label: 'Red Marker', value: 'red' },
            { label: 'Blue Marker', value: 'blue' },
            { label: 'Green Marker', value: 'green' },
            { label: 'Black Marker', value: 'black' }
        ];
    

    // get selectedValues() {
    //     return this.value.join(',');
    // }

    @api
    selectCheckbox(checkboxValue){
        const selectedCheckbox = this.options.find(checkbox =>{
            return checkboxValue === checkbox.value;
        })

        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "Successfully checked";
        }
        return "No checkbox found";

    }

}