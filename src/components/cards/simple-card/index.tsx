import { Box, Heading, AspectRatio, Image, Text, Center, Stack } from 'native-base';
import React from 'react';

export interface SimpleCardProps {
  imageUrl: string;
  title: string;
  location: string;
  description?: string;
  width?: string;
  height?: string;
}

const SimpleCard = ({ imageUrl, title, location, description, width, height }: SimpleCardProps) => {
  return (
    <Box width={width}>
      <Box
        position="relative"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        height={height}
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" h={270} ratio={16 / 9}>
            <Image
              source={{
                uri: imageUrl,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5">
            GALLERY
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading numberOfLines={1} size="md" ml="-1">
              {title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              {location}
            </Text>
          </Stack>
          {description ? (
            <Text numberOfLines={2} fontWeight="400">
              {description}
            </Text>
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
};

export default SimpleCard;
