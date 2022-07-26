import React from 'react';
import { IPerson } from '../models/IPerson';
import Person from './Person';


interface IPersonListProps {
  persons: IPerson[];
}

function PersonList({ persons }: IPersonListProps) {
  return (
    <div className='flex-row-container' >
    
      {persons.map((personItem ) => (                  
      <div className='flex-row-item'>             
        <Person person={personItem} />    
      </div>            
      
      ))}
    </div>
    
  )
}



export default PersonList;