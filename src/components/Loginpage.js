import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import "./login.css";
import Home from "../day3/Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    // try {
    //   // navigate("/");
    // } catch (error) {}
    try {
      const response = axios.get(`http://localhost:5000/login/check/${email}`);
      const user = (await response).data;
      console.log(user);
      const userd = user.find(
        (user) => user.email === email && user.password === password
      );
      if (userd) {
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        navigate("/");
      } else {
        toast({
          title: "Incorrect information!",
          // description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    } catch (e) {
      toast({
        title: "Wrong Information!",
        description: e.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
      console.error("Error message" + e);
    }

    console.log(`${email} ${password}`);
  };

  return (
    <div className="login">
      <div>
        <VStack spacing="10px">
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              value={email}
              type="email"
              placeholder="Enter Your Email Address"
              _placeholder={{ color: "white" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                placeholder="Enter password"
                _placeholder={{ color: "white" }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
            isLoading={loading}
          >
            Login
          </Button>
          <Button
            variant="solid"
            colorScheme="red"
            width="100%"
            onClick={() => {
              setEmail("guest@example.com");
              setPassword("12345678");
            }}
          >
            Get Guest User Credentials
          </Button>
        </VStack>
      </div>
    </div>
  );
};

export default LoginPage;
