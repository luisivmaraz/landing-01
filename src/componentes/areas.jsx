import { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

const departments = [
  {
    id: 'inventarios',
    name: 'Gestion de inventarios',
    details: 'La gestión de inventarios es un proceso esencial para garantizar que los hospitales tengan los suministros necesarios para brindar atención médica de calidad. Implica el seguimiento y control de los recursos materiales, desde medicamentos y equipos médicos hasta suministros de oficina y alimentos.',
    image: 'https://cdn2.hubspot.net/hubfs/2599069/software%20de%20inventario%20para%20hospitales.jpg',
    icon: 'https://i.ibb.co/tMgzwhYp/engranaje-1.png',
    color: 'teal.200',
  },
  {
    id: 'suministro',
    name: 'Suministro de materiales',
    details: 'Nuestro sistema te permite gestionar las órdenes de compra, realizar un seguimiento de los envíos y recibir los materiales de manera oportuna. Automatiza las tareas repetitivas y libera a tu personal para que se enfoque en tareas más importantes.',
    image: 'https://media.istockphoto.com/id/1773074070/es/foto/enfermera-organizando-suministros-m%C3%A9dicos-en-el-laboratorio-del-hospital.jpg?s=612x612&w=0&k=20&c=OiWe2vBwQxFjzGvEoALAtH3C8YTsJDvYHtxJl-26MBE=',
    icon: 'https://i.ibb.co/ycPXSQG5/candado.png',
    color: 'teal.200',
  },
  {
    id: 'espacios',
    name: 'Gestión de espacios',
    details: 'Nuestro sistema te permite planificar y gestionar los espacios físicos, desde salas de espera hasta quirófanos. Mejora la eficiencia del flujo de trabajo y garantiza la comodidad de pacientes y personal.',
    image: 'https://www.atelierlima.com/wp-content/uploads/2023/02/GA_1-1024x600.jpg',
    icon: 'https://i.ibb.co/spRp26S2/lupa.png',
    color: 'teal.200',
  }
  ,
  {
    id: 'mantenimiento',
    name: 'Mantenimiento',
    details: 'Nuestro sistema te permite programar y realizar un seguimiento del mantenimiento preventivo y correctivo de los equipos. Reduce el tiempo de inactividad de los equipos y prolonga su vida útil.',
    image: 'https://smarthospitalcantabria.com/wp-content/uploads/mantenimiento-electro-02.jpg',
    icon: 'https://i.ibb.co/spRp26S2/lupa.png',
    color: 'teal.200',
  } ,
  {
    id: 'residuos',
    name: 'Control de residuos',
    details: 'Gestiona los residuos de manera segura y eficiente. Nuestro sistema te permite clasificar, almacenar y eliminar los residuos de acuerdo con las normativas vigentes. Protege el medio ambiente y garantiza la seguridad de pacientes y personal.',
    image: 'https://www.econtenedores.com/wp-content/uploads/2024/05/gestion-correcta-residuos-hospitales-1024x683.jpg',
    icon: 'https://i.ibb.co/spRp26S2/lupa.png',
    color: 'teal.200',
  }
];

function Areas() {
  const [selectedDept, setSelectedDept] = useState(departments[0]);

  return (
    <Box position="relative" bgImage="url('https://nischinto-react.vercel.app/shape/contact-shape1.svg')" bgSize="cover" bgPosition="center">
      <Container maxW="6xl" py={10}>
        <Heading textAlign="center" mb={6}>Revoluciona la eficiencia de tu hospital</Heading>
        <Text textAlign="center" color="gray.600" mb={8}>
          Cada módulo está diseñado para optimizar procesos, reducir costos y garantizar la calidad de la atención.
        </Text>
        
        {/* Department Tabs */}
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4} mb={8}>
          {departments.map((dept) => (
            <Button
              key={dept.id}
              onClick={() => setSelectedDept(dept)}
              bg={selectedDept.id === dept.id ? dept.color : 'gray.100'}
              color={selectedDept.id === dept.id ? 'white' : 'black'}
              borderRadius="lg"
              _hover={{ bg: dept.color, color: 'white' }}
              _focus={{ outline: 'none', boxShadow: 'none' }} // <-- Elimina el borde en focus
              _active={{ outline: 'none', boxShadow: 'none' }} // <-- También en active
            >
              {dept.name}
            </Button>
          ))}
        </SimpleGrid>
        
        {/* Department Content */}
        <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={6}>
          <Box flex={1}>
            <Image src={selectedDept.image} alt={selectedDept.name} borderRadius="lg" boxShadow="lg" tabIndex={-1} w="100%" h="300px" />
          </Box>
          <Box flex={1} textAlign={{ base: 'center', md: 'left' }}>
            <Heading size="lg" color={selectedDept.color}>{selectedDept.name}</Heading>
            <Text mt={2} color="gray.600">{selectedDept.details}</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Areas;
