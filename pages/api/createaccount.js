import { PrismaClient } from ".prisma/client"

const prisma=new PrismaClient()
async function CreateAccount(username,email,password){
  var data={}
  const user=prisma.user.create({
        data:{
          username:String(username),
          email:String(email),
          password:String(password)
        }
      })
    const collection=prisma.collection.create({
      data:{
       collection_name:"Favourites",
       collection_owner:await user.then(e=>e.user_id)
      }
    })
    await user.then(e=>data=e)
    data['favourite_id']=await collection.then(e=>e.collection_id)
      return data
    }
export default async function handler(req, res) {
    const body=JSON.parse(req.body)
    const returned_data=await CreateAccount(body.username,body.email,body.password)

    return res.status(200).json(returned_data)

} 