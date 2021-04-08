import { v4 as uuidv4 } from 'uuid';
export class NoteModel {
    public id: string;
    public description: string;
    public idOfNote: string

    constructor(description: string = "", idOfNote: string="") {
        this.id = uuidv4();
        this.description = description;
        this.idOfNote = idOfNote;
    }

    isValid(): boolean {
        if (this.description == "") {
            return false
        }
        else {
            return true;
        }
    }
}