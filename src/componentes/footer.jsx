import { Box, Container, Flex, Heading, Link, Stack, Text, Image, Divider } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.50" py={10}>
      <Container maxW="6xl">
        <Flex justify="space-between" flexWrap="wrap">
          {/* Logo y descripción */}
          <Box maxW="300px">
            <Flex align="center" mb={4}>
              <Image src="https://i.ibb.co/rf76xPFg/icons8-hospital-2-64.png" alt="Nischinto Logo" boxSize="40px" mr={2} />
              <Heading size="md">Lakid</Heading>
            </Flex>
            <Text fontSize="sm" color="gray.600">
              Lakid es una empresa de gestion de sistemas de inventario para el sector salud.
            </Text>
            <Stack direction="row" mt={4} spacing={3}>
              <Link href="#" isExternal>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="Facebook" boxSize="25px" />
              </Link>
              <Link href="#" isExternal>
                <Image src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" boxSize="25px" />
              </Link>
              <Link href="#" isExternal>
                <Image src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" alt="Instagram" boxSize="25px" />
              </Link>
              <Link href="#" isExternal>
                <Image src="https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png" alt="X" boxSize="25px" />
              </Link>
            </Stack>
          </Box>

          {/* Enlaces útiles */}
          <Box>
            <Heading size="sm" color="teal.500" mb={4}>Links de interes</Heading>
            <Stack spacing={2}>
              <Link href="#">FAQs</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Terminos y condiciones </Link>
            </Stack>
          </Box>

          {/* Departamentos */}
          <Box>
            <Heading size="sm" color="teal.500" mb={4}>Departamentos</Heading>
            <Stack spacing={2}>
              <Link href="#">Rehabilitacion</Link>
              <Link href="#">Laboratorio</Link>
              <Link href="#">Cirugias</Link>
              <Link href="#">Mantenimiento</Link>
            </Stack>
          </Box>

          {/* Contactos */}
          <Box>
            <Heading size="sm" color="teal.500" mb={4}>Contacto</Heading>
            <Text fontSize="sm"><strong>Direccion:</strong> Av. universidad #1000</Text>
            <Text fontSize="sm"><strong>Email:</strong> soporte@lakid.Com</Text>
            <Text fontSize="sm"><strong>Telefono:</strong> (+52) - 123 234 34 54</Text>
          </Box>
        </Flex>
        <Divider my={6} />
        <Text fontSize="sm" textAlign="center" color="gray.500">
          © {new Date().getFullYear()} Lakid. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
