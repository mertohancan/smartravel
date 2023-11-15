import { Input as NativeBaseInput } from 'native-base';
import { ResponsiveValue } from 'native-base/lib/typescript/components/types';
import React from 'react';
import { KeyboardTypeOptions } from 'react-native';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?(v: string): void;
  inputRightElement?: React.ReactElement;
  editable?: boolean;
  style?: any;
  keyboardType?: KeyboardTypeOptions;
  height?: ResponsiveValue<string>;
  multiline?: boolean;
  numberOfLine?: number;
}

const Input = ({
  placeholder,
  value,
  onChange,
  editable,
  inputRightElement,
  style,
  keyboardType,
  height,
  multiline,
  numberOfLine,
}: InputProps) => {
  return (
    <NativeBaseInput
      keyboardType={keyboardType}
      placeholder={placeholder}
      value={value}
      padding={3}
      onChangeText={onChange}
      editable={editable}
      height={height}
      multiline={multiline}
      numberOfLines={numberOfLine}
      InputRightElement={inputRightElement}
      w="100%"
      style={{ fontSize: 16, shadowColor: 'transparent', ...style }}
    />
  );
};

export default Input;
