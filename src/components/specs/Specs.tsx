import { Container, Box, Text, Divider } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/layout';
const Specs = () => {
  return (
    <Container maxWidth='70%' mt='40px'>
      <Box width='700px'>
        <Text variant='bold' fontSize='lg'>
          Specifications 👀
        </Text>
        <Divider marginY='10px' />
        <Text marginBottom='30px'>
          On its 5711/1A model, Patek Philippe unveils a dial in a brand-new
          olive-green shade that is new to the Nautilus collection and which
          should delight lovers of this cult watch, an icon of sporting
          elegance. The highly recognizable design of the case, bezel and
          bracelet is enhanced by a subtle alternation between satinated and
          polished manual finishing. Inside this model water-resistant to 120m
          beats a self-winding caliber visible through a transparent sapphire
          crystal case-back.
        </Text>
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing='10px'>
          <Box height='80px'>
            <Text variant='bold'>Brand</Text>
            <Text>Patek Philippe</Text>
          </Box>
          <Box height='80px'>
            <Text variant='bold'>Model</Text>
            <Text>Nautilus 5711/1A-014</Text>
          </Box>
          <Box height='80px'>
            <Text variant='bold'>Ref Number</Text>
            <Text>5711/1A-014</Text>
          </Box>
          <Box height='80px'>
            <Text variant='bold'>Year of Production</Text>
            <Text>2021</Text>
          </Box>
          <Box height='80px'>
            <Text variant='bold'>Case Material</Text>
            <Text>Steel</Text>
          </Box>
          <Box height='80px'>
            <Text variant='bold'>Bracelet Material</Text>
            <Text>Steel</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export { Specs };