import { LightningElement, track } from 'lwc';
import { fireEvent } from 'pubsub';

export default class SelectedMeetingRoom extends LightningElement {
    @track selectedMeetingRoom;
}