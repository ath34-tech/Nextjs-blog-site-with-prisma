import {ModalOverlay ,Button,Modal,ModalBody,ModalCloseButton,ModalContent,FormLabel,ModalHeader,ModalFooter,FormControl,Input} from "@chakra-ui/react"
import React from 'react'
import { useCookies } from 'react-cookie'
import AppContext from "../context/appContext"
import CreateAccount from "../functions/createAccount"
export default function SignUpModal({initialRef,isOpen,onClose,SignUp,SetLogin,SetSignUpData}){
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
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder="Name" value={SignUp.username} onChange={event=>SetSignUpData({"username":event.target.value,"email":SignUp.email,"password":SignUp.password})}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" value={SignUp.email}  onChange={event=>SetSignUpData({"username":SignUp.username,"email":event.target.value,"password":SignUp.password})}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="password" value={SignUp.password}  onChange={event=>SetSignUpData({"username":SignUp.username,"email":SignUp.email,"password":event.target.value})}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
          <Button colorScheme="blue" onClick={async()=>{
          await CreateAccount(SignUp,SetCookieData,setData)
          window.location.reload()
          }}>
              Signup
            </Button>
          <Button onClick={()=>{
            SetLogin(true)
          }} mr={3} ml={3} colorScheme="orange">Login</Button>
            <Button onClick={onClose} colorScheme="red">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}