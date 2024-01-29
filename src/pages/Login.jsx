import React from 'react';
import "./Login.css"
import { loginUser } from '../Api';
import { useLoaderData, Form, redirect, useActionData, useNavigation } from 'react-router-dom';

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}
export async function action({ request }) {
  let formData = await request.formData();
  const email = formData.get("email")
  const password = formData.get("password")
  const pathname = new URL(request.url)
  .searchParams.get("redirectTo") || "/host"
  try {

    let data = await loginUser({ email, password })
    localStorage.setItem("loggin", true)
    let response = redirect(pathname);
    response.body = true;
    return response;
    
  }
  catch (err) {
    return err.message;
  }

}
export default function Login() {

  let msg = useLoaderData();
  let error = useActionData();
  let navigation = useNavigation()
  error ? msg = null : null


  return (
    <div className='login_form'>
      <div className='login'>

        <h1>Sign in to your account</h1>
        {msg && <h5 className='red'>{msg}</h5>}
        {error && <h5 className='red'>{error}</h5>}
        <Form method='post' replace>
          <input type='email' placeholder='Email address' name='email' />
          <input type='password' placeholder='Password' name='password' />

          <button disabled={navigation.state === "submitting"}>
            {
              navigation.state === "submitting" ? "Logging in" : "Log in"

            }</button>
        </Form>
      </div>
    </div>
  )
}
