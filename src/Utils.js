import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn =JSON.parse(localStorage.getItem("loggin"));
    let pathName=new URL(request.url).pathname;
  if (!isLoggedIn) {
    const response = redirect(`/login?message=You must login first &redirectTo=${pathName}`)
    response.body = true
    throw response
  }
  return null
}