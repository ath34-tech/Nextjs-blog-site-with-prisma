import { PrismaClient } from ".prisma/client"

const prisma=new PrismaClient()

async function loginAccount(email,password){
  
        const user=await prisma.user.findFirst({
            where:{
                email:email,password:password
            }
        })
    if(user!=null){
        const collection=await prisma.collection.create({
            data:{
             collection_name:"Favourites",
             collection_owner:user.user_id
            }
          })
        return {"login":true,'username':user.username,'user_id':user.user_id,'favourite_id':collection.collection_id}
    }
    else{
        return {'login':false}
    }
}

export default async function handler(req, res) {
    const body=JSON.parse(req.body)
    const returned_data=await loginAccount(body.email,body.password)

    return res.status(200).json(returned_data)

} 