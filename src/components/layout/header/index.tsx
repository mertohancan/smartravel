import { MaterialIcons } from '@expo/vector-icons';
import { HStack, IconButton, Icon, Box, StatusBar, Image } from 'native-base';
import React from 'react';

import Logo from '../../../assets/img/logo.png';
import { COLORS } from '../../../constants/colors';

const Header = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box safeAreaTop bg={COLORS.white} />
      <HStack
        bg={COLORS.white}
        px="1"
        py="3"
        height={66}
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <IconButton
            icon={<Icon size="xl" as={MaterialIcons} name="menu" color={COLORS.primary} />}
          />
          <Image
            source={Logo}
            alt="Smartravel"
            resizeMode="contain"
            style={{ width: 150, height: 70 }}
          />
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="notifications-none" size="xl" color={COLORS.primary} />
            }
          />
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
