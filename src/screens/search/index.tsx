import { FlatList } from 'native-base';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import HotelSearch from './components/HotelSearch';
import SimpleCard, { SimpleCardProps } from '../../components/cards/simple-card';
import { Seperator } from '../../components/commons';
import Layout from '../../components/layout';
import { H2 } from '../../components/typography';
import { COLORS } from '../../constants/colors';
import { MOCK_HOTELS } from '../../mock-data/homepage';

const renderListItem = (props: SimpleCardProps) => {
  return (
    <View style={styles.listItem}>
      <SimpleCard {...props} />
    </View>
  );
};

const Search = () => {
  return (
    <Layout>
      <ScrollView>
        <View style={styles.container}>
          <HotelSearch />
          <View style={styles.wrapper}>
            <H2>Personalized hotels for you</H2>
            <Seperator mb={20} />
            <FlatList
              data={MOCK_HOTELS}
              renderItem={({ item }) => renderListItem(item)}
              showsHorizontalScrollIndicator={false}
              horizontal={false}
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginTop: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 12,
  },
  listItem: {
    marginBottom: 12,
  },
});
