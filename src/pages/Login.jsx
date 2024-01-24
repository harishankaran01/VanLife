import React from 'react';
import "./Login.css"
import { loginUser } from '../Api';
import { useLoaderData } from 'react-router-dom';
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}
export default function Login() {
    let msg=useLoaderData();
  let [formData, setFormData]=React.useState({email:"",password:""});
  let [status, setStatus] = React.useState("idle");
  let [err, setErr] = React.useState(null);
  function update(event){

    let {name,value}=event.target;
    setFormData(prev=>{
      return{
        ...prev,
        [name]:value
      }

    })
   

  }
  function handleDetails(){
    setErr(null)
    setStatus("submitting")
    loginUser(formData)
      .then(data => console.log(data))
      .catch(err =>setErr(err.message))
      .finally(() => setStatus("idle"))
  }

  return (
      <div className='login_form'>
      <div className='login'>
        <h1>Sign in to your account</h1>
        {msg && <h5 className='red'>{msg}</h5>}
        {err && <h5 className='red'>{err}</h5>}
        <div className="login_inp">
          <input type='email' placeholder='Email address' name='email' onChange={update} value={formData.email}/>
          <input type='password' placeholder='Password' name='password' onChange={update} value={formData.password} />
        </div>
        <button onClick={handleDetails} disabled={status ==="submitting"}>
          {
            status === "submitting" ? "Logging in" :"Log in" 

          }</button>
      </div>
      </div>
  )
}
