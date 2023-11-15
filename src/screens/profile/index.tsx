import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, Icon } from 'native-base';
import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

import Layout from '../../components/layout';
import { H2, P3, P2 } from '../../components/typography';
import { COLORS } from '../../constants/colors';
import { MENU_LIST } from '../../mock-data/profile';

const Profile = () => {
  const navigation = useNavigation<any>();
  return (
    <Layout>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Box alignItems="center" flexDirection="row">
            <View style={styles.circle}>
              <ImageBackground
                borderRadius={40}
                source={{
                  uri: 'https://media.licdn.com/dms/image/C4D03AQHddjd6351dRw/profile-displayphoto-shrink_800_800/0/1574624638965?e=2147483647&v=beta&t=MNBlsxD9F7NXJU1iZ0V9a0NbSUbytUz43VDoHBbQCTQ',
                }}
                style={{ flex: 1 }}
              />
            </View>
            <Box ml="20px">
              <H2>Steven Gerrard</H2>
              <Box mt="5px">
                <P3>sgerrad@gmail.com</P3>
              </Box>
            </Box>
          </Box>
        </View>
        <View style={styles.menuWrapper}>
          {MENU_LIST.map((menu) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Personality')}
              key={menu.id}
              activeOpacity={0.6}
              style={styles.menu}>
              <P2>{menu.name}</P2>
              <Icon as={MaterialIcons} name="chevron-right" size="xl" color={COLORS.primary} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    display: 'flex',
    padding: 24,
    backgroundColor: COLORS.white,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(196, 196, 196, 1)',
  },
  menuWrapper: {
    marginTop: 8,
    backgroundColor: COLORS.white,
  },
  menu: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'rgba(235, 240, 255, 1)',
    borderBottomWidth: 1,
  },
});
