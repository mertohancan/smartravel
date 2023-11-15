import { createDrawerNavigator } from '@react-navigation/drawer';
import { Badge, Box, HStack, VStack, Text, Heading, FlatList, Spacer } from 'native-base';
import React from 'react';
import { Image } from 'react-native';

import Typewriter from './components/Typewriter';
import { COLORS } from '../../constants/colors';
import { SMARTRAVEL_PURPOSE } from '../../constants/constants';
import { MOCK_QUESTIONS } from '../../mock-data/voice-search';

const Drawer = createDrawerNavigator();

export const GIF = 'https://i.pinimg.com/originals/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.gif';

const ListItem = () => {
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        <Badge width="80%" size="xl" colorScheme="success">
          Previous Questions
        </Badge>
      </Heading>
      <FlatList
        data={MOCK_QUESTIONS}
        renderItem={({ item }) => (
          <Box borderBottomWidth="0.2px" padding={3} borderRadius={4} borderColor={COLORS.primary}>
            <HStack space={[2, 3]} justifyContent="space-between">
              <VStack>
                <Text numberOfLines={3} width="200px" color={COLORS.black}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" color={COLORS.black} alignSelf="center">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.recentText}
      />
    </Box>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <Box safeArea background={COLORS.white}>
          {/* <P2>{props.state.routeNames.map((r) => r)}</P2> */}
          <ListItem />
        </Box>
      )}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="Ailem ile gidebileceğim keyifli aktiviteleri olan bir otel öner."
        component={Search}
      />
    </Drawer.Navigator>
  );
};

const Search = () => {
  return (
    <Box safeAreaTop style={{ flex: 1, position: 'relative', backgroundColor: 'white' }}>
      <Image style={{ width: 180, height: 180, marginLeft: 20 }} source={{ uri: GIF }} />
      <Box alignItems="flex-start" padding={12}>
        <Typewriter text={SMARTRAVEL_PURPOSE} />
      </Box>
    </Box>
  );
};

export default MyDrawer;
