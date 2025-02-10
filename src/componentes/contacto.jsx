import { Box, Button, Container, FormControl, FormLabel, Input, Select, Textarea, Heading, Flex } from "@chakra-ui/react";

function Contacto() {
  return (
    <Box
      bgImage="url('https://nischinto-react.vercel.app/shape/contact-shape3.svg')"
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container 
        maxW="lg" 
        py={10} 
        bg="white" 
        borderRadius="lg"
        boxShadow="lg"
        p={8}
      >
        <Box textAlign="center" mb={6}>
          <Heading size="xl">Solicita una demo</Heading>
          <Box fontSize="sm" color="gray.500" mt={2}>
            Estas a un formulario de mejorar tu gestion hospitalaria.
          </Box>
        </Box>
        
        <Flex direction="column" gap={4}>
          <Flex gap={4}>
            <FormControl>
              <FormLabel>Nombre completo</FormLabel>
              <Input placeholder="Hector Valderrabano" />
            </FormControl>
            <FormControl>
              <FormLabel>Correo electronico</FormLabel>
              <Input type="email" placeholder="hola@email.com" />
            </FormControl>
          </Flex>

          <Flex gap={4}>
            <FormControl>
              <FormLabel>Numero telefonico</FormLabel>
              <Input placeholder="+00 141 23 234" />
            </FormControl>
            <FormControl>
              <FormLabel>Direccion de hospital</FormLabel>
              <Input placeholder="Av. 1000" />
            </FormControl>
          </Flex>

          <Flex gap={4}>
            <FormControl>
              <FormLabel>Departamento</FormLabel>
              <Select placeholder="Departamento">
                <option>Gestión administrativa general</option>
                <option>Recursos humanos</option>
                <option>Recursos humanos</option>
                <option>Orden interno</option>
                <option>Otro</option>
              </Select>
            </FormControl>
            
          </Flex>

          <FormControl>
            <FormLabel>Mensaje</FormLabel>
            <Textarea placeholder="Escribe tu interes o algo chevere..." />
          </FormControl>

          <Button colorScheme="teal" size="lg" mt={4}>Enviar</Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Contacto;
