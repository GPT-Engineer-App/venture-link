import { Container, Text, VStack, Box, Heading, IconButton, Image, HStack, StackDivider } from "@chakra-ui/react";
import { FaSearch, FaUserTie, FaHandshake, FaComments } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Startup Connect
          </Heading>
          <Text fontSize="lg">Ek unique aur innovative platform jo startup founders, co-founders, aur investors ko connect karne ke liye design kiya gaya hai.</Text>
        </Box>

        <HStack spacing={8} justify="center">
          <Box textAlign="center">
            <IconButton aria-label="Search Founders" icon={<FaSearch />} size="lg" isRound />
            <Text mt={2}>Search Founders & Investors</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Create Profile" icon={<FaUserTie />} size="lg" isRound />
            <Text mt={2}>Create Detailed Profiles</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Connect" icon={<FaHandshake />} size="lg" isRound />
            <Text mt={2}>Connect with Matches</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Message" icon={<FaComments />} size="lg" isRound />
            <Text mt={2}>Secure Messaging</Text>
          </Box>
        </HStack>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            How It Works
          </Heading>
          <Text fontSize="md" mb={4}>
            Users category wise founders aur investors ko easily search kar sakte hain, jisse unhe apne specific requirements ke liye sahi match milne mein madad milti hai.
          </Text>
          <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3MTY5NzI3ODR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Startup Collaboration" borderRadius="md" />
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Dedicated Support System
          </Heading>
          <Text fontSize="md">Platform ek dedicated support system provide karta hai jo startups ko unki growth journey mein har kadam par madad karta hai.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
