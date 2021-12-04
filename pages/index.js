import Hero from '../components/Hero'
import BlogSection from '../components/BlogSection'
import {PrismaClient} from '@prisma/client'
import AppContext from '../context/appContext'
import React from 'react'
import parseCookies from '../helpers'


// export async function AddToFavourite({id,favourite_id,is_fav}){
  
//   const prisma=new PrismaClient()
//   const favourite_collection=await prisma.collection.findUnique({
//     where:{
//       id:parseInt(id)
//     }
//   })
//   const blog=await prisma.blog.findUnique({where:{id:parseInt(id)}})
//   const update_favourite=await prisma.collection.findUnique({
//     where:{
//       collection_id :parseInt(favourite_id)
//     },
//     data:{blogs:{set:favourite_collection.blog.push(blog)}}
//   })
// }
export default function Home({blogs,login_data,login}) {

  const {data,setData}=React.useContext(AppContext)
    React.useEffect(()=>{
      setData(login_data)

    },[])
    return ( 
   <>
       <Hero/>
    <BlogSection blogs={blogs} text={true} login={login}/>
   </>
    )
}


export async function getServerSideProps({req, res}) {
  const cookie=parseCookies(req)
  const prisma=new PrismaClient()
  const blogs=[]
    const blogs_db=await prisma.blog.findMany()
    blogs_db.map(row=>{
      blogs.push({"id":row.id,"publish_date":JSON.stringify(row.publish_date),"title":row.title,"description":row.description,"tags":row.tags,"image":row.image})
    })
    // const favourites=await prisma.collection.findUnique({  
    //   where:{
    //     collection_id:cookie.favourite_id!=null?parseInt(cookie.favourite_id):0
    //   }
    // })
    // Login
    let login_data={}
    var login_status=false
    if(cookie.login!=null && cookie.login==='true'){
      login_data={"login":true,"user_name":cookie.user_name,"user_id":cookie.user_id}
      login_status=true
    }
    else{
      login_data={"login":false,"user_name":"","user_id":null}
    }
    return {
      props:{
        blogs,
        login_data,
        login:login_status,
      }
    }
  }
