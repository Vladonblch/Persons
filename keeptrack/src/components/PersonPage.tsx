import React from 'react';
import { IPerson } from '../models/IPerson';
import { PersonService } from '../service/PersonService';
import PersonList from './PersonList';


const {useState, useEffect} = React;

function PersonPage() {

  const [persons, setPersons] = useState<IPerson[]>([]);

  useEffect(() => {
    var fetchPersons = async () =>{
      var service = new PersonService();
      var persons = await service.getPerson();
      setPersons(persons);
    }
    fetchPersons().catch(err => console.log(err));
  }, [setPersons]);


  return (
    <>
    <h1>Who you need to know</h1>
    
        <PersonList persons={persons} />
      
  
    </>
  );
}
export default PersonPage;