import React from 'react';
import gif from './giphy.gif';

const Spinner = ({isLoading}) => {
  return (
    <section>
       <img src={gif} alt='loading-gif'  
        style={{ width: '300px', margin: 'auto', display: 'block' ,marginTop:'40px',borderRadius:'5%'}}/> 
    </section>
  )
}

export default Spinner
