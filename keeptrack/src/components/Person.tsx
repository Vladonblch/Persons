import React from 'react';
import { IPerson } from '../models/IPerson';
import './PersonStyles.css';


interface IPersonProps {
  person: IPerson;
}

function PersonList({ person }: IPersonProps) {
  return (
    
        
     
       
          <div className='frame'>
            
            
            <div><img src="https://www.w3schools.com/howto/img_avatar.png" className='round'  /></div>
            
            <p className='name'> {person.name}</p> 
            
            <p  className='age'>{person.age} </p>
            
            
          </div>
          
   
        
    
  )
}

export default PersonList;


