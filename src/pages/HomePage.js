import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import LoginPage from "../components/Loginpage";
import Register from "../components/Register";
import "./Homepage.css"; // Import the CSS file

function Homepage() {
  return (
    <div id="homepage">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="./bg.webm" type="video/webm" />
      </video>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="transparent"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
          className="box1"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            PartyPerfect
          </Text>
        </Box>
        <Box
          bg="transparent"
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          className="box2"
        >
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab color="white">Login</Tab>
              <Tab color="white">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LoginPage />
              </TabPanel>
              <TabPanel>
                <Register />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
}

export default Homepage;
