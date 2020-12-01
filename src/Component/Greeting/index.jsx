import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

const Greeting = (props) => {
return (
   <header> Hello {props.name} , your welcome to Javascript Frameworks class. 
   </header>
);
};

export default Greeting;