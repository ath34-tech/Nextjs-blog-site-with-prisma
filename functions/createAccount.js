import { endpoint_base } from '../config'


export default async function CreateAccount(SignUp,SetCookieData,setData){
    const response= await fetch(`${endpoint_base}/api/createaccount`,{
      method:'POST',
      body:JSON.stringify({'username':SignUp.username,'email':SignUp.email,'password':SignUp.password})
    })
    const result=await response.json()
    SetCookieData('login',true,{path:"/"})
    SetCookieData('user_name',result.username,{path:"/"})
    SetCookieData('user_id',result.user_id,{path:"/"})
    SetCookieData('favourite_id',result.favourite_id,{path:"/"})
    setData({"login":true,"user_name":result.username,"user_id":result.user_id})
  }