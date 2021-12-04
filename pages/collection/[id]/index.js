import { Text,Box,Flex } from "@chakra-ui/react"
import BlogSection from "../../../components/BlogSection"
import { PrismaClient } from ".prisma/client"
export default function CollectionPage({collection_name,blogs}){

    return(
        <Flex
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={2}
        mt={10} mb={20}>
        <Box>
            <Text fontSize={["1rem","1.5rem","1.5rem","1.6rem"]} fontWeight="bold" textTransform="uppercase" fontFamily={"Secular One"} textAlign="center" display="flex">
        {collection_name}:
    </Text>
    </Box>
    <Flex
    flexDirection="column"
    alignItems="center"
    ml={[6,6,8,8]}
    >
 <BlogSection blogs={blogs}/>
        </Flex>
        </Flex>
    )
}


export async function getServerSideProps(context){
    const prisma=new PrismaClient()
    const collection_blog=await prisma.collection.findUnique({
        where:{
            collection_id:parseInt(context.params.id)           
        }
        ,select:{
            blogs:true,
            collection_name:true
        }
    })

    return {
        props:{
            collection_name:collection_blog.collection_name,
            blogs:collection_blog.blogs
        }
    }
}