import { IPerson } from "../models/IPerson";

export class PersonService {
    
    public async getPerson(): Promise<IPerson[]> {
        var a = await fetch('https://ghibliapi.herokuapp.com/people');
        var persons = await a.json();
        var slicePersons= persons.slice(0,9);
        return slicePersons;
    }

    
}

