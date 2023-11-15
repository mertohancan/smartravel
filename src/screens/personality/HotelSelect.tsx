import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, Checkbox, FlatList, Text } from 'native-base';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Input from '../../components/input';
import Layout from '../../components/layout';
import RadioButton from '../../components/radio-button';
import { P2 } from '../../components/typography';
import { COLORS } from '../../constants/colors';
import { getNextDay } from '../../utils/dateUtils';

const MOCK_KEYWORDS = [
  'adventure',
  'airport',
  'art',
  'beach',
  'boat tour',
  'church',
  'concert',
  'diving',
  'nature',
  'ski',
  'walk',
  'zoo',
];

const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

//@ts-ignore
const TODAY = new Date().toLocaleDateString('en', options).replace('-', '');

//@ts-ignore
const NEXT_DAY = getNextDay(2).toLocaleDateString('en', options).replace('-', '');

const HotelSelect = () => {
  const navigation = useNavigation<any>();
  const [answer, setAnswer] = useState('0');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const isChecked = (p: string) => selectedFeatures.includes(p);

  const handleSelect = (p: string) => {
    if (isChecked(p)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== p));
    } else {
      setSelectedFeatures((prev) => [...prev, p]);
    }
  };

  return (
    <Layout title="Create a tour plan" goBack={() => navigation.goBack()}>
      <ScrollView>
        <View style={styles.container}>
          <P2>How many days tour plan would you like?</P2>
          <View style={styles.element}>
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
          </View>
          <View style={styles.element}>
            <P2>Do you prefer walking or driving?</P2>
            <View style={styles.element}>
              <RadioButton
                options={[
                  { key: '0', text: 'Walking' },
                  { key: '1', text: 'Driving' },
                ]}
                value={answer}
                onChange={setAnswer}
              />
            </View>
          </View>
          <View style={styles.element}>
            <P2>Choose keywords for tourist attractions. (Optional)</P2>
            <View style={styles.element}>
              <FlatList
                data={MOCK_KEYWORDS}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSelect(item)}
                    style={styles.button}>
                    <Checkbox
                      key={item}
                      value={item}
                      isChecked={isChecked(item)}
                      color="purple.100"
                      colorScheme="purple"
                      aria-label={item}
                    />
                    <Text style={{ marginLeft: 3, marginTop: -2 }}>{item}</Text>
                  </TouchableOpacity>
                )}
                numColumns={3}
                keyExtractor={(item) => item}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}>
          <P2 style={{ color: COLORS.primary, position: 'absolute', bottom: 20, right: 20 }}>
            Next
          </P2>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default HotelSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    position: 'relative',
  },
  element: {
    marginTop: 8,
    flex: 1,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 20,
  },
  next: {
    fontSize: 18,
    color: COLORS.primary,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  seperator: {
    width: 12,
  },
});
