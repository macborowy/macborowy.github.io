import { Box, Heading, Text, Image, Link, IconButton, Container, Flex } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <Box
      minHeight="100vh"
      bg='linear-gradient(25deg, #060097 0%, #005EE9 60%, #0e06ba 95%) padding-box'
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        maxWidth={"80%"}
      >
        <Box
          order={{ sm: 1, md: 2 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minWidth={"50%"}
          pb={6}
        >
          <Image src="hero-500x500.png" alt="Hero" />
        </Box>

        <Box
          order={{ sm: 2, md: 1 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          minWidth={"50%"}
        >
          <Header />
          <ProductDescription />
          <Footer />
        </Box>
      </Flex>
    </Box>
  )
}

function Header() {
  return (
    <Box mb={6}>
      <Flex align="center" justify="center" mb={4}>
        <Image src="logo-160x90.png" alt="Szkoła Chmury" maxW="60px" mr={3} />
        <Heading color="whiteAlpha.900" fontSize={{ base: "3xl", md: "4xl" }} >Szkoła Chmury</Heading>
      </Flex>
      <Heading color="whiteAlpha.900">Dzielimy się doświadczeniem pracy w chmurach!</Heading>
      <Container maxW={"50%"} mx="auto" borderBottom="1px solid" borderColor="whiteAlpha.500" pb={4} />
    </Box>
  )
}

function ProductDescription() {
  return (
    <Box
      maxW={"70%"}
      mx="auto"
    >
      <Text fontSize={{ base: "sm", md: "sm" }} color="whiteAlpha.900" mb={4}>
        Szkoła Chmury to miejsce stworzone dla profesjonalistów IT, którzy chcą poszerzać swoje kompetencje w świecie chmury publicznej. Stawiamy na praktykę, konkretne umiejętności i wiedzę, która pomaga zdobywać certyfikaty oraz radzić sobie z codziennymi wyzwaniami w środowiskach chmurowych.
      </Text>
      <Text fontSize={{ base: "sm", md: "sm" }} color="whiteAlpha.900">
        Dołącz do społeczności ekspertów na Instagramie, gdzie na bieżąco dzielimy się naszym doświadczeniem i inspirujemy do działania.
      </Text>
      <InstagramButton />
    </Box>
  )
}

function InstagramButton() {
  return (
    <Link href="https://instagram.com/szkolachmury" target="_blank" mt={4}>
      <IconButton
        aria-label="Instagram"
        size={{ base: "md", md: "lg" }}
        rounded="md"
        padding="10px"
        bgGradient="to-br"
        gradientFrom="#f9ce34"
        gradientVia="#ee2a7b"
        gradientTo="#6228d7"
        color="white"
      >
        <FaInstagram /> @szkolachmury
      </IconButton>
    </Link>
  )
}

function Footer() {
  return (
    <Box mt={12} mb={4}>
      <Text fontSize={{ base: "xs", md: "xs" }} color="whiteAlpha.700">
        Copyright ® 2025 Szkoła Chmury
      </Text>
    </Box>
  )
}

export default App;