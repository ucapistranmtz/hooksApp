import { useEffect, useState } from "react"
import { Message } from "./Message";
 

export const FormWithCustomHook = () => {

    const [formState, setformState] = useState( {
        userName: 'ucapistran', 
        email:'ucapistran@outlook.com'
    }) ;


     const {userName,email}= formState;

     const onInputChange= ( {target})=> {
        const {name,value}=target;
        setformState({...formState,[name]:value})
   
     }

     useEffect(()=>{
        console.log('useEffect called')
     },[]);

  /*    useEffect(()=>{
        console.log('formState changed')
     },[formState]);


     useEffect(()=>{
        console.log('email changed')
     },[email]); */




  return (
     <>
      <h1>Formulario with custom hook</h1>
      <hr/>

      <input 
      type='text'
      className='form-control'
      placeholder='UserName'
      name='userName'
      value={userName}
      onChange={onInputChange}
      />
      <hr></hr>


    <input 
      type='text'
      className='form-control mt-2'
      placeholder='ucapistran@outlook.com'
      name='email'
      value={email}
      onChange={onInputChange}
      />
    
    {
       ( userName==='ucapistran2' && <Message/>)
     }
     </>
  )
}
