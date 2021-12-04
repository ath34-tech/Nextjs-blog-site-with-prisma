import { endpoint_base } from '../config'


export default async function LoginAccount(login,SetCookieData,setData){
    const response= await fetch(`${endpoint_base}/api/loginaccount`,{
      method:'POST',
      body:JSON.stringify({'email':login.email,'password':login.password})
    })
    const result=await response.json()
    if(result.login){
    SetCookieData('login',true,{path:"/"})
    SetCookieData('user_name',result.username,{path:"/"})
    SetCookieData('user_id',result.user_id,{path:"/"})
    SetCookieData('favourite_id',result.favourite_id,{path:"/"})
    setData({"login":true,"user_name":result.username,"user_id":result.user_id})
    }
    else{

    }
  }