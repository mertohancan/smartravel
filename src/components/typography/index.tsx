import React from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = { children: React.ReactNode; style?: any };

export const H1 = ({ children }: Props) => <Text style={styles.h1}>{children}</Text>;
export const H2 = ({ children, style }: Props) => (
  <Text style={{ ...styles.h2, ...style }}>{children}</Text>
);
export const P1 = ({ children, style }: Props) => (
  <Text style={{ ...styles.p1, ...style }}>{children}</Text>
);
export const P2 = ({ children, style }: Props) => (
  <Text style={{ ...styles.p2, ...style }}>{children}</Text>
);
export const P3 = ({ children }: Props) => <Text style={{ ...styles.p3 }}>{children}</Text>;
export const C1 = ({ children, style }: Props) => (
  <Text style={{ ...styles.c1, ...style }}>{children}</Text>
);
export const C2 = ({ children, style }: Props) => (
  <Text style={{ ...styles.c2, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: '600',
  },
  h2: {
    fontSize: 18,
    fontWeight: '600',
  },
  h3: {
    fontSize: 16,
    fontWeight: '600',
  },
  p1: {
    fontSize: 14,
    fontWeight: '600',
  },
  p2: {
    fontSize: 14,
    fontWeight: '500',
  },
  p3: {
    fontSize: 12,
    fontWeight: '500',
  },
  c1: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12,
  },
  c2: {
    fontSize: 8,
    fontWeight: '500',
  },
});
