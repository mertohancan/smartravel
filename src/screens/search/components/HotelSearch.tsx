import { MaterialIcons } from '@expo/vector-icons';
import { Box, Button, Text } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Input from '../../../components/input';
import { COLORS } from '../../../constants/colors';
import { getNextDay } from '../../../utils/dateUtils';

const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

//@ts-ignore
const TODAY = new Date().toLocaleDateString('en', options).replace('-', '');
//@ts-ignore
const NEXT_DAY = getNextDay(2).toLocaleDateString('en', options).replace('-', '');

const HotelSearch = () => {
  const [location, setLocation] = useState('Antalya');
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Input placeholder="Şehir, Ülke veya İsim.." value={location} onChange={setLocation} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.element}>
          <TouchableOpacity activeOpacity={0.7}>
            <Input
              placeholder="Gidiş Tarihi"
              editable={false}
              value={TODAY}
              inputRightElement={
                <Box mr={2}>
                  <MaterialIcons size={18} name="calendar-today" />
                </Box>
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />
        <View style={styles.element}>
          <TouchableOpacity activeOpacity={0.7}>
            <Input
              placeholder="Dönüş Tarihi"
              editable={false}
              value={NEXT_DAY}
              inputRightElement={
                <Box mr={2}>
                  <MaterialIcons size={18} name="calendar-today" />
                </Box>
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.element}>
          <TouchableOpacity activeOpacity={0.7}>
            <Input
              placeholder="Kişi, Oda Sayısı"
              value="2 Adults"
              editable={false}
              inputRightElement={
                <Box mr={2}>
                  <MaterialIcons size={18} name="person" />
                </Box>
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Button rounded="md" background={COLORS.primary} width="full">
          <Text color="white">Search</Text>
        </Button>
      </View>
    </View>
  );
};

export default HotelSearch;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 12,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  element: {
    flex: 1,
  },
  seperator: {
    width: 12,
  },
});
