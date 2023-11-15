import { useNavigation } from '@react-navigation/native';
import { Box, Button, Image, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';

import TourPlanIMG from '../../assets/img/tour-plan.png';
import { Seperator } from '../../components/commons';
import Layout from '../../components/layout';
import { H2, P2, C1, P1 } from '../../components/typography';
import { COLORS } from '../../constants/colors';

interface EventCardProps {
  title?: string;
  description?: string;
  date?: string;
  image?: string;
}

const MOCK_DATA = [
  {
    title: 'ATATÜRK 1881 - 1919',
    description: 'TİM Cinemas',
    date: 'Nov 18 ',
    image: 'https://www.biletix.com/static/images/live/event/eventimages/ataturkcinema.png',
  },
  {
    title: 'Story of Grand Bazaar',
    description: 'Antonina',
    date: 'Nov 18 ',
    image: 'https://www.biletix.com/static/images/live/event/eventimages/wide/2JO57wide-.jpg',
  },
];

const renderListItem = (props: EventCardProps) => {
  return (
    <View style={styles.cardWrapper}>
      <Image style={styles.cardImage} resizeMode="cover" source={{ uri: props.image }} />
      <P1 style={styles.text}>{props.title}</P1>

      <P2 style={styles.text}>{props.description}</P2>
      <C1 style={styles.text}>{props.date}</C1>
    </View>
  );
};

const Results = () => {
  const navigation = useNavigation<any>();

  return (
    <Layout title="Your tour plan" goBack={() => navigation.goBack()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>DAY 1</Text>
          </Button>
          <Button
            style={{
              ...styles.button,
              backgroundColor: COLORS.white,
              borderWidth: 1,
              borderColor: COLORS.primary,
            }}>
            <Text style={{ ...styles.buttonText, color: COLORS.primary }}>DAY 2</Text>
          </Button>
        </View>
        <Box px="8px">
          <Image style={styles.img} resizeMode="center" source={TourPlanIMG} />
          <Seperator mt={20} />
          <H2 style={{ color: COLORS.white }}>Upcoming Events</H2>
          <Seperator mt={20} />
          <FlatList
            data={MOCK_DATA}
            renderItem={({ item }) => renderListItem(item)}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </Box>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Review')}>
        <P2 style={styles.next}>Next</P2>
      </TouchableOpacity>
    </Layout>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    position: 'relative',
    flexDirection: 'column',
  },
  header: {
    padding: 8,
  },
  element: {
    marginTop: 8,
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
    height: 44,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.white,
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
    color: COLORS.white,
    position: 'absolute',
    bottom: 20,
    right: 20,
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
  img: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
  listItem: {
    marginRight: 12,
    height: 100,
  },
  cardWrapper: {
    width: 200,
    height: 200,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: {
    width: 180,
    borderRadius: 8,
    height: 100,
    marginBottom: 4,
  },
  text: {
    color: COLORS.white,
    marginVertical: 2,
  },
});
