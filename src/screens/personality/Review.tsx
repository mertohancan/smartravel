import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Input from '../../components/input';
import Layout from '../../components/layout';
import { P2 } from '../../components/typography';
import { COLORS } from '../../constants/colors';

const Review = () => {
  const navigation = useNavigation<any>();
  const [accommodation, setAccommodation] = useState('');

  const [recommendations, setRecommendations] = useState('');

  return (
    <Layout title="Review" goBack={() => navigation.goBack()}>
      <View style={styles.container}>
        <View style={styles.element}>
          <P2>
            Would you like to rate and comment on your accommodation experience to get better hotel
            recommendations?
          </P2>
          <View style={styles.element}>
            <Input
              multiline
              numberOfLine={4}
              placeholder="Please enter your thoughts."
              value={accommodation}
              onChange={setAccommodation}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.element}>
          <P2>
            Would you like to rate and comment on your travel experience to get better attraction
            recommendations?
          </P2>
          <View style={styles.element}>
            <Input
              placeholder="Please enter your thoughts."
              multiline
              numberOfLine={4}
              value={recommendations}
              onChange={setRecommendations}
              style={styles.input}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <P2 style={{ color: COLORS.primary }}>Send and finish</P2>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    position: 'relative',
  },
  element: {
    marginTop: 8,
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
  seperator: {
    height: 20,
  },
  input: { height: 120, textAlignVertical: 'top' },
});
