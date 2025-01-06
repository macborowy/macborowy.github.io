import { SimpleGrid, Box, Heading, Text, Image, Link, IconButton, Container } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";  // Add this import

function App() {
  return (
    <SimpleGrid minHeight="100vh">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        bgGradient="to-br"
        gradientFrom="blue.400"
        gradientTo="blue.800"
      >
        <Header />
        <ProductDescription />
        <Footer />
      </Box>
    </SimpleGrid>
  )
}

function Header() {
  return (
    <Box mb={6}>
      <Image src="logo.png" alt="Logo" maxW="300px" mx="auto" />
      <Heading color="whiteAlpha.900">Dzielimy się doświadczeniem pracy w chmurach!</Heading>
      <Container maxW="10%" mx="auto" borderBottom="1px solid" borderColor="whiteAlpha.500" pb={4}/>
    </Box>
  )
}

function ProductDescription() {
  return (
    <Box
      maxW={{ base: "70%", sm: "70%", lg: "30%" }}
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
    <Box mt={12}>
      <Text fontSize={{ base: "xs", md: "xs" }} color="whiteAlpha.700">
        Copyright ® 2025 Szkoła Chmury
      </Text>
    </Box>
  )
}

export default App;