
import { List,ListItem, ListIcon, Flex ,Button,Text ,Box,Image} from "@chakra-ui/react"
import {SunIcon,QuestionIcon,EditIcon,StarIcon,EmailIcon} from "@chakra-ui/icons"
export default function Hero(){

    return(
        <Flex
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={2}>
    
    <Flex
    flexDirection="column"
    alignItems="center"
    ml={[6,6,8,8]}
    >

    <Box>
    <Text fontSize={["1rem","1.5rem","1.5rem","1.6rem"]} fontWeight="bold" textTransform="uppercase" fontFamily={"Secular One"} bgGradient="linear-gradient(0deg, rgb(6, 77, 95) 19%, rgba(0,235,255,1) 69%)" bgClip="text">
        Welcome to dank blogger
    </Text>
    </Box>
    <List spacing={5} color="black" mt={5}>
    <ListItem fontSize={["0.8rem","1rem","1rem","1rem"]} fontFamily={"Comfortaa"}>
    <ListIcon as={SunIcon} color="black" mr={5}/>
    Learn something new everyday!
  </ListItem>
  <ListItem fontSize={["0.8rem","1rem","1rem","1rem"]} fontFamily={"Comfortaa"}>
    <ListIcon as={QuestionIcon} color="black" mr={5}/>
    Answering every questions.
  </ListItem>
  
  <ListItem fontSize={["0.8rem","1rem","1rem","1rem"]} fontFamily={"Comfortaa"}>
    <ListIcon as={EditIcon} color="black" mr={5}/>
    New articles everyday.
  </ListItem>
  
  <ListItem fontSize={["0.8rem","1rem","1rem","1rem"]} fontFamily={"Comfortaa"}>
    <ListIcon as={StarIcon} color="black" mr={5}/>
    Blog on every favourite topics.
  </ListItem>

    </List> 
    <Button mt={10} ml={"-2rem"} variant="outline" 
    _hover={{bg:"black",color:"aliceblue"}}
    rightIcon={<EmailIcon/>} borderColor="black" borderWidth={3}>
        <Text fontSize={15}>SUBSCRIBE OUR EMAIL LIST</Text>
    </Button>
    </Flex>
   <Box boxSize={["sm","lg","sm","lg"]} mt={"1rem"} ml={[0,"3rem",0,"3rem"]} >
  <Image src="https://blush.design/api/download?shareUri=qMXne6PlOKwECFmP&w=800&h=800&fm=png" alt="img alt"  />
</Box>



    </Flex>
    )
}



// <Box position="fixed" width={["17rem","25rem","25rem","25rem"]} height={"60px"} backgroundColor={"#DC009E"} borderRightRadius="100px" pl={[0,0,4,4]} pt={["10px","-20px","-20px","-20px"]} color="#F8CECE" ml={[0,10,10,10]}>
// <Text fontSize={["1.5rem","2rem","2rem","2rem"]} fontFamily={"Secular One"} bgGradient="linear(to-tr, teal.300, yellow.400)" bgClip="text">
// INOVATIVE TECH BLOG
// </Text>
// </Box>
// <Box  position="fixed" width={["17rem","25rem","25rem","25rem"]}  height={"60px"} backgroundColor={"#F7DDEF"} borderLeftRadius="100px" pl={[2,0,4,4]} pt={["10px","-20px","-20px","-20px"]} color="#F8CECE" ml={[0,30,30,30]} mt={"3.5rem"} >
// <Text fontSize={["1.4rem","1.8rem","1.8rem","1.8rem"]} fontFamily={"Secular One"} color="#000000" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
// FOUND BEST TUTORIALS
//     </Text>
// </Box> 
// <Box position="fixed" width={"600px"} height={"60px"} backgroundColor={"#002858"} borderRightRadius="100px" pl={4} pt={"5px"} color="#F8CECE" ml={10} mt={"7rem"}>
// <Text fontSize={"1.7rem"} fontFamily={"Secular One"}>
// EVERYDAY LEARN SOMETHING NEW
// </Text>
// </Box>
// <Box position="fixed" width={"500px"} height={"60px"} backgroundColor={"#2F4765"} borderLeftRadius="100px" pl={4} pt={"-20px"} color="#F8CECE" ml={5} mt={"10.5rem"}>
// <Text fontSize={"2rem"} fontFamily={"Secular One"}>
// BEST RESOURCE ONLINE
// </Text>
// </Box>