import { Text,Box } from "@chakra-ui/layout"
import {PrismaClient} from "@prisma/client"
export default function BlogPage({content}){
    return (
        <>
        <Box bg={"#fcfcfa"} width={["110%","100%","100%","100%"]} mb={10} pb={10}>
        <Text fontSize={[32,56,56,64]} fontFamily={"Secular One"}>{content.title}</Text>
        <Text color={"gray"} ml={5} display={"flex"}><Text fontWeight={"bold"}>writer:</Text>{content.writer}</Text>
        <hr/>
        <Box mt={20} pl={5} pr={5} pt={"-3rem"} fontFamily={"Comfortaa"}>
        <Text>{content.content}</Text>
        </Box>
        </Box>
        </>
    )
}

export async function getServerSideProps(context){
    const prisma=new PrismaClient()
    
    const row=await prisma.blog.findUnique({
        where:{
            id:parseInt(context.params.id)
        }
        ,
        include:{
            writer_id:true
        }
    })
    const data={"writer":row.writer_id.username,"id":row.id,"publish_date":JSON.stringify(row.publish_date),"title":row.title,"description":row.description,"tags":row.tags,"image":row.image,"content":row.content}
    return{
        props:{
            content:data
        }
    }
}