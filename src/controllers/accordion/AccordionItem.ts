import {Accordions} from './Accodions';
import IAccordion = Accordions.IAccordion;


class Accordion implements IAccordion {
    public icon: string;
    public name: string;
    public isOpen: boolean = false;
    public content: string;

    constructor(data: IAccordion) {
        this.icon = data.icon;
        this.name = data.name;
        this.content = data.content;
    }

    public toggle(): void {
        this.isOpen = !this.isOpen;
    }
}



export {Accordion}