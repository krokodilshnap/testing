namespace Accordions {
    
    export interface IAccordion {
        icon: string;
        name: string;
        content: string;
        isOpen: boolean;
        toggle(): void;
    }


}

export {Accordions}