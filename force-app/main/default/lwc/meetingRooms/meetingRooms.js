import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {

    @track selectedMeetingRoom;

    meetingRoomsInfo = [
        {roomName : 'A-01', roomCapacity:'12'},
        {roomName : 'A-02', roomCapacity:'2'},
        {roomName : 'A-03', roomCapacity:'12'},
        {roomName : 'A-04', roomCapacity:'3'},
        {roomName : 'B-01', roomCapacity:'12'},
        {roomName : 'B-02', roomCapacity:'6'},
        {roomName : 'B-03', roomCapacity:'11'},
        {roomName : 'C-01', roomCapacity:'13'},
        {roomName : 'C-02', roomCapacity:'9'}
    ];

    onTitleClickHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
    }

    constructor(){
        super();
        this.template.addEventListener('titleclick', this.onTitleClickHandler.bind(this));
    }

}