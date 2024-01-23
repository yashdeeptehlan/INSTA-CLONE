import {ViewIcon, ViewOffIcon } from "@chakra-ui/react"
import{ Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword"

const Signup = () => {
    const [inputs,setInputs] = useState({
        fullName:"",
        username:"",
        email:"",
        password:"",
    })
    const [showPassword, setShowPassword] = useState(false)
    const { loading, error, signup } = useSignUpWithEmailAndPassword()

    return(
        <>
            <Input
                placeholder="Email"
                fontSize={14}
                type="email"
                size={"sm"}
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />

            <Input
                placeholder="Username"
                fontSize={14}
                type="text"
                size={"sm"}
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />

            <Input
                placeholder="Password"
                fontSize={14}
                type="password"
                size={"sm"}
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />

            <InputGroup>
                <Input 
                    placeholder="Password"
                    fontSize={14}
                    type={showPassword ? "text" : "password"}
                    value={inputs.password}
                    size={"sm"}
                    onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                />
                <InputRightElement>
                    <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>

            {error && (
                <Alert status="error" forntSize={13} p={2} borderRadius={4}>
                    <AlertIcon forntSize={12}/>
                    {error.message}
                </Alert>
            )}

            <Button 
                w={"full"}
                colorScheme="blue"
                size="sm"
                fontSize={14}
                isLoading={loading}
                onClick={() => signup(inputs)}
            >
                Sign up
            </Button>
        </>
    )
}
export default Signup