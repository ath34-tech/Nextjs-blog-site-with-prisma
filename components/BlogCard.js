import React from "react"
import {Flex, Box ,Tooltip,Image,Badge,Link,Button,Popover,PopoverTrigger,PopoverArrow,PopoverContent,PopoverBody,PopoverCloseButton} from "@chakra-ui/react"
import {ArrowForwardIcon,StarIcon,AddIcon,LinkIcon} from "@chakra-ui/icons"
// import { AddToFavourite } from "../pages"
import { useCookies } from "react-cookie"
export default function BlogCard(props){
  // const [cookies,SetCookie]=useCookies(['favourite_id'])

    const [isFav,SetFav]=React.useState(false)
    return (
        <Box maxW="sm" mb={5} borderWidth="1px" borderRadius="lg" overflow="hidden" width={["16rem"]} bg={"white"} >
 
            <Image src={`${props.imageUrl}`} width={"17rem"} height={"200px"}/>
            <Flex justifyContent="space-between">
        
            <Box display="flex" alignItems="baseline" p={2} width={"60%"} isTruncated>
              {props.badgeList!=null?
              
              props.badgeList.map((badge,key)=>{
                return(
                  <Badge borderRadius="full" px="2" colorScheme={badge.color} key={key}>
                  {badge.name}
                </Badge>
                )
              
              }):<></>
            }
            </Box>
            <Flex justifyContent="flex-end" mb={3}>
              <Tooltip hasArrow label="Add to collection" bg="black" color="white">
              <AddIcon  width={5} height={5} mr={3} mt={2}/>
              </Tooltip>
              <Tooltip hasArrow label="Favourite" bg="black" color="white">
              <StarIcon  width={5} height={5} mr={3} mt={2} onClick={()=>{
                SetFav(!isFav)
                // AddToFavourite(props.id,cookies.favourite_id)
              }
                }  color={isFav?"yellow":"black"}/>
              </Tooltip>
              <Popover>
              <Tooltip hasArrow label="Copy link" bg="black" color="white">
              <Box>
              <PopoverTrigger>
              <LinkIcon  width={5} height={5} mr={3} mt={2} onClick={()=>{
                navigator.clipboard.writeText(`http://localhost:3000/blog/${props.id}`)
              }}/>
              </PopoverTrigger>
              </Box>
              </Tooltip>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton size={4}/>
                <PopoverBody>Link copied</PopoverBody>
              </PopoverContent>
              </Popover>

            </Flex> 
            </Flex>
            <hr />
            <Box p="2">
     
            <Box
          mt="3"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          isTruncated
          fontFamily={"Secular One"}
          fontSize={"1rem"}
        >
        {props.title}
        </Box>
        <Box
          mt="3"
          fontWeight="light"
          noOfLines={3}
          fontFamily={"Comfortaa"}
          fontSize={"0.6rem"}
        >
        {props.synopsis}
        </Box>

        <Box display="flex" mt={5}>
        <Button variant="solid" bg="rgb(51, 148, 138)" color="white" _hover={{bg:"rgba(216,255,251,1)",color:"black"}} rightIcon={<ArrowForwardIcon/>}><Link href={`http://localhost:3000/blog/${props.id}`}>Read more </Link></Button>
       
        </Box>
            </Box>
        </Box>
     
    )
}