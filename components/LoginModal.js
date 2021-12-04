import {ModalOverlay ,Button,Modal,ModalBody,ModalCloseButton,ModalContent,FormLabel,ModalHeader,ModalFooter,FormControl,Input} from "@chakra-ui/react"
import { useCookies } from 'react-cookie'
import AppContext from "../context/appContext"
import LoginAccount from "../functions/loginAccount"
import React from "react"

export default function LoginModal({initialRef,isOpen,onClose,SetLogin,Login}){
  const {data,setData}=React.useContext(AppContext)
  const [cookieData,SetCookieData]=useCookies(['login','user_name','user_id'])
    return(
        <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login to your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder="Name" onChange={event=>SetLogin({"email":event.target.value,"password":Login.password})}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="password" onChange={event=>SetLogin({"email":Login.email,"password":event.target.value})}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
          <Button colorScheme="blue" onClick={async()=>{
            await LoginAccount(Login,SetCookieData,setData)
            window.location.reload()
          }}>
              login
            </Button>
          <Button onClick={()=>{
            SetLogin(false)
          }}  mr={3} ml={3} colorScheme="orange">Signup</Button>


            <Button onClick={onClose} colorScheme="red">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}