import { MaterialIcons } from '@expo/vector-icons';
import { HStack, IconButton, Icon, Box, StatusBar, View } from 'native-base';
import React from 'react';

import { COLORS } from '../../../../constants/colors';
import { H2 } from '../../../typography';

interface Props {
  goBack?(): void;
  title: string;
}

const SimpleHeader = ({ goBack, title }: Props) => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Box safeAreaTop bg={COLORS.primary} />
      <HStack
        bg={COLORS.primary}
        px="1"
        py="3"
        height={66}
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <IconButton
            onPress={goBack}
            icon={<Icon size="xl" as={MaterialIcons} name="arrow-back" color={COLORS.white} />}
          />
        </HStack>

        <Box marginLeft="-10%">
          <H2 style={{ color: COLORS.white }}>{title}</H2>
        </Box>

        <View />
      </HStack>
    </>
  );
};

export default SimpleHeader;
