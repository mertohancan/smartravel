import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

type Option = { key: string; text: string };

interface Props {
  options: Option[];
  onChange(key: string): void;
  value?: string;
}

const RadioButton = ({ options, onChange, value }: Props) => {
  return (
    <>
      {options.map((item) => (
        <TouchableOpacity onPress={() => onChange(item.key)}>
          <View key={item.key} style={styles.ButtonContainer}>
            <View style={item.key === value ? styles.CheckedCircle : styles.Circle} />
            <Text style={styles.Option}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    width: '100%',
    borderWidth: 0.5,
    borderColor: COLORS.primary,
  },

  Wrapper: {
    flexDirection: 'row',
  },

  Circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    zIndex: 0,
    borderWidth: 1,
    alignSelf: 'center',
  },

  CheckedCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    zIndex: 10,
    alignSelf: 'center',
  },
  Option: {
    marginLeft: 10,
    fontSize: 17,
    color: COLORS.black,
    width: '90%',
  },
});
