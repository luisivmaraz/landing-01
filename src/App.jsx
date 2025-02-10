import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import Areas from './componentes/areas';
import Contacto from './componentes/contacto';
import Footer from './componentes/footer';
const images = [
  "https://static.vecteezy.com/system/resources/thumbnails/049/387/329/small/stack-of-cardboard-boxes-png.png",
  "https://static.vecteezy.com/system/resources/previews/013/836/386/non_2x/medical-advice-3d-rendering-png.png",
  "https://freepngimg.com/save/125318-traveller-force-ambulance-png-image-high-quality/500x375"
];

function App() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Flex as="header" justify="space-between" align="center" p={4} boxShadow="md" bg="white">
     <Image src="https://i.ibb.co/rf76xPFg/icons8-hospital-2-64.png" alt="Nischinto Logo" boxSize="40px" mr={2} />
        {!isMobile && (
          <Flex gap={6}>
            <Text as="a" href="#">Nosotros</Text>
            <Text as="a" href="#">Servicios</Text>
            <Text as="a" href="#">FAQ</Text>
            <Text as="a" href="#">Contacto</Text>
          </Flex>
        )}
      </Flex>

      <Box position="relative" minH="80vh" bgGradient="linear(to-r, blue.500, teal.400)">
        <Image
          src="https://i.ibb.co/ZzMP0RSb/hero-shape.png"
          position="absolute"
          top="5%"
          left={0}
      
          height="100%"
          objectFit="cover"
          zIndex={0}
        />
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          minH="80vh"
          p={8}
          position="relative"
          zIndex={1}
        >
          <Box flex={1} textAlign={{ base: "center", md: "left" }}>
            <Text color="gray.500" fontSize="sm">Sistema de gestión de recursos materiales</Text>
            <Heading size="2xl" mt={2}>
             <Text as="span" color="teal.500">Controla </Text>todo <Text as="span" color="blue.500"></Text><br />
              <Text as="span" color="blue.500">reduce </Text>costos <Text as="span" color="blue.500"></Text>
            </Heading>
            <Text mt={4} color="gray.800">
            Simplifica la gestión de recursos de tu hospital con nuestro sistema integral. Desde el inventario hasta el mantenimiento, 
            automatiza procesos, reduce costos y mejora la calidad de atención.
            </Text>
            <Button mt={6} colorScheme="teal" size="lg">Solicita una demo</Button>
          </Box>
          <Box flex={1} textAlign="center">
            <Flex justify="flex-end">
              <Image 
                src={images[currentImage]} 
                alt="Doctor with patient"  
                w="100%"  
                h="500px"
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
      
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box textAlign="center" p={5} borderWidth={1} borderRadius="lg" boxShadow="md">
            <Image src="https://i.ibb.co/tMgzwhYp/engranaje-1.png" alt="Gestión Integral" mx="auto" mb={4} boxSize="50px" />
            <Heading size="md" mb={4}>Gestión Integral</Heading>
            <Text mt={2} color="gray.600">Controla y administra todos los recursos materiales de tu hospital en un solo lugar. 
              Desde inventario hasta compras, nuestro sistema te ofrece una visión completa y actualizada</Text>
          </Box>
          <Box textAlign="center" p={5} borderWidth={1} borderRadius="lg" boxShadow="md">
            <Image src="https://i.ibb.co/ycPXSQG5/candado.png" alt="seguridad y trazabilidad" mx="auto" mb={4} boxSize="50px" />
            <Heading size="md">Seguridad y trazabilidad</Heading>
            <Text mt={2} color="gray.600">Registra cada movimiento de tus recursos, desde la recepción hasta la entrega. 
              Obtén información detallada sobre el origen, la ubicación y el estado de cada artículo o espacio.</Text>
          </Box>
          <Box textAlign="center" p={5} borderWidth={1} borderRadius="lg" boxShadow="md">
            <Image src="https://i.ibb.co/spRp26S2/lupa.png" alt="Análisis de Datos" mx="auto" mb={4} boxSize="50px" />
            <Heading size="md">Análisis de Datos</Heading>
            <Text mt={2} color="gray.600">Accede a informes y estadísticas detalladas sobre el uso de los recursos. 
              Identifica tendencias, optimiza procesos y toma decisiones informadas.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      <Box as="areas" >
        <Areas></Areas>
        
      </Box>

      <Box>
  <Contacto />
</Box>
<Footer></Footer>
    </Box>
  );
}

export default App;
