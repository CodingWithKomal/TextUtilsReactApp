import React from 'react'

//rcf - 
export default function Alert(props) {
  const capitalise =(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  
    return (



   //this syntax is like it check s if     props.alert  has any value or not if it has value then it will  go further otherwise it will stop

    props.alert &&
    <div>
     
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong> {capitalise(props.alert.type)}</strong>  {props.alert.msg}
        </div>
    </div>
  )
}
