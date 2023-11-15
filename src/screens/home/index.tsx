import { FlatList } from 'native-base';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import SimpleCard, { SimpleCardProps } from '../../components/cards/simple-card';
import { Seperator } from '../../components/commons';
import Layout from '../../components/layout';
import { H2 } from '../../components/typography';
import { COLORS } from '../../constants/colors';
import { MOCK_HOTELS, MOCK_TOURS, MOCK_VRS } from '../../mock-data/homepage';

const renderListItem = (props: SimpleCardProps) => {
  return (
    <View style={styles.listItem}>
      <SimpleCard width="320px" {...props} />
    </View>
  );
};

const Home = () => {
  return (
    <Layout>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <H2>Personalized Hotels</H2>
            <Seperator mb={20} />
            <FlatList
              data={MOCK_HOTELS}
              renderItem={({ item }) => renderListItem(item)}
              showsHorizontalScrollIndicator={false}
              horizontal
            />

            <Seperator mb={40} />

            <H2>Personalized Activities</H2>
            <Seperator mb={20} />
            <FlatList
              data={MOCK_TOURS}
              renderItem={({ item }) => renderListItem(item)}
              showsHorizontalScrollIndicator={false}
              horizontal
            />

            <Seperator mb={40} />

            <H2>Virtual Tours</H2>
            <Seperator mb={20} />
            <FlatList
              data={MOCK_VRS}
              renderItem={({ item }) => renderListItem(item)}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
    marginRight: 12,
  },
});
