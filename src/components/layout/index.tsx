import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './header';
import SimpleHeader from './header/simple-header';
import { COLORS } from '../../constants/colors';

const Layout = ({
  children,
  title,
  goBack,
}: {
  children: React.ReactNode;
  goBack?(): void;
  title?: string;
}) => {
  return (
    <View style={styles.container}>
      {goBack ? <SimpleHeader goBack={goBack} title={title || ''} /> : <Header />}
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.white,
  },
});
