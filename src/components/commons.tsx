import React from 'react';
import { View } from 'react-native';

export const Seperator = ({ mt, mb }: { mt?: number; mb?: number }) => (
  <View style={{ marginBottom: mb, marginTop: mt }} />
);
