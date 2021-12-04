import BlogCard from "./BlogCard"
import { Text,Flex } from "@chakra-ui/react"

 function BlogSection({blogs,text,login}){
    // props.blogList!==null?props.blogList['data']:
    const blog_lists=blogs
    return (
        <Flex   
         flexDirection="column"
         mt={["-10rem","-10rem","-5rem","-10rem"]}
        >
            {text?
            <Text alignSelf="center" fontSize={["1.2rem","1.5rem","1.5rem","1.6rem"]} fontWeight="bold" textTransform="uppercase" fontFamily={"Secular One"}>Recent blogs:</Text>:null}
        <Flex p="7" wrap="wrap" justifyContent="space-between">
        {
        blog_lists.map((blog,key)=>{
            var tags=[]
            try{
            var tag = eval('(' + blog.tags + ')');
            for (var i in tag)
            {
              tags.push(tag[i]);
            }
        }
        catch{
            tags=[]
        }
            return(
            <BlogCard key={key} login={login} id={blog.id} badgeList={tags} imageUrl={blog.image===""?"https://picsum.photos/400/200":`${blog.image}`} title={`${blog.title}`} synopsis={`${blog.description}`}/>
            )
        })
    }
        </Flex>
        </Flex>
    )
}

export default BlogSection;