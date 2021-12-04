import React from 'react'
import { useDisclosure,Stack, Flex ,Button,Text ,Box,Spacer,Menu,MenuButton,MenuList,MenuItem,  MenuDivider,
} from "@chakra-ui/react"
import Link from 'next/link'
import {CloseIcon,HamburgerIcon,ChevronDownIcon} from "@chakra-ui/icons"
import AppContext from '../context/appContext'
import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal'
import { useCookies } from 'react-cookie'
import { endpoint_base } from '../config'
const NavItem = ({ children, isLast, to = "/",style, ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest} style={style}>
          {children}
        </Text>
      </Link>
    )
  }

  const NavButton = ({ children, isLast, to = "/", ...rest }) => {
    const[SignUp,SetSignUpData]=React.useState({'username':"","email":"","password":""})
    const[LoginData,SetLoginData]=React.useState({"email":"","password":""})

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [login,SetLogin]=React.useState(false)
    const initialRef = React.useRef()
    return (
      <>
        <Button display="block" colorScheme="orange" variant="solid" onClick={()=>{
          onOpen();
          SetLogin(false)
        }}>
          {children}
        </Button>
        {login===false?  
        <SignUpModal initialRef={initialRef} isOpen={isOpen} onClose={onClose} SignUp={SignUp} SetLogin={SetLogin} SetSignUpData={SetSignUpData}/>
        :
       <LoginModal  initialRef={initialRef} isOpen={isOpen} onClose={onClose} SetLogin={SetLoginData} Login={LoginData}/>
        }
        </> 
    )
  }


  const NavDropdown=({data})=>{
    const [cookie,setCookie,removeCookie]=useCookies(['login','favourite_id'])
    return(
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
    <Text isTruncated width={100}>{data.user_name}</Text>
  </MenuButton>
  <MenuList>
  <MenuItem>{data.user_name}</MenuItem>
  <MenuDivider/>
    <MenuItem>Collection</MenuItem>
    <MenuItem><Link href={`${endpoint_base}/collection/${cookie.favourite_id}`}>Favourites</Link></MenuItem>
<MenuDivider/>
    <MenuItem width={400}  color={'#fff'} bg={'#eb1a1a'} _hover={{bg:'#bf2e2e'}} onClick={async()=>{
      await removeCookie('login',{path:"/"})
      window.location.reload()
    }}>Log out</MenuItem>

    {/* Feature to add in future */}
    {/* Write a blog */}
  </MenuList>
</Menu>
    )
  }

 function Nav(){
const {data,setData}=React.useContext(AppContext)
const [show,toggle]=React.useState(true)
return(
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={2}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}

      color={["black", "black", "primary.700", "primary.700"]}
      fontWeight="bold"
    >
<Flex align="center" justify="space-between" width={{base:'100%', md:'auto'}}>
  <Text textTransform="uppercase" fontSize={["1.5rem","2rem","2rem","2rem"]} fontFamily={"Secular One"}>Dank Blogger</Text>
  <Spacer/>
  <Box display={{ base: "block", md: "none" }} onClick={()=>toggle(!show)}  mr={"-0.8rem"} mt={"-0.3rem"}>
        {show ? <CloseIcon width={8} height={7} /> : <HamburgerIcon width={10} height={9} />}
      </Box>
</Flex>

<Box
  display={{ base: show ? "block" : "none", md: "block" }}
  flexBasis={{ base: "100%", md: "auto" }}
  p={2}
>
  <Stack align="center"
    spacing={8}
  justify={["center", "space-between", "flex-end", "flex-end"]}
  direction={["column", "row", "row", "row"]}
  pt={[4, 4, 0, 0]} ml={["0.5rem","1rem",0,0]} fontFamily={"Comfortaa"}>
        <NavItem to="/">Home</NavItem>
  <NavItem to="/">About</NavItem>
  <NavItem to="/">Blogs</NavItem>
  <NavItem to="/">Contact</NavItem>

  {data.login?<NavDropdown data={data}/>:<NavButton to="/">Login/Signup</NavButton>}

      </Stack>
      </Box>
      </Flex>
)
}


export default Nav;