import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import RadioButton from '../../../../components/radio-button';
import { COLORS } from '../../../../constants/colors';
const { width, height } = Dimensions.get('window');

let scrollYPos = 0;

interface Props {
  questions: any[];
}

const Questions = ({ questions }: Props) => {
  const navigation = useNavigation<any>();
  const scrollViewRef = useRef<any>();
  const [cardIndex, setCardIndex] = useState(1);
  const [value, setValue] = useState<string | undefined>();

  const goToNextCard = () => {
    scrollYPos = height * cardIndex;
    scrollViewRef?.current?.scrollTo?.({ x: 0, y: scrollYPos });
    setCardIndex(cardIndex + 1);
    setValue(undefined);
  };

  const handleChange = (answer: string) => setValue(answer);

  return (
    <View style={styles.Container}>
      <ScrollView scrollEnabled={false} showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
        {questions.map((item) => {
          return (
            <View style={styles.Wrapper}>
              <View style={styles.QuestionBox}>
                <Text style={styles.QuestionText}>{item.question}</Text>
              </View>
              <View style={styles.AnswersBox}>
                <RadioButton value={value} onChange={handleChange} options={item.options} />
              </View>
              <View style={styles.Bottom}>
                <TouchableOpacity
                  disabled={Boolean(!value)}
                  style={Boolean(!value) && { opacity: 0.5 }}
                  onPress={
                    cardIndex === questions.length
                      ? () => navigation.navigate('HotelSelect')
                      : goToNextCard
                  }>
                  <Text style={styles.Next}>
                    {cardIndex === questions.length ? 'Next Step' : 'Next'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.background,
    width: '100%',
    height: '100%',
  },
  Wrapper: {
    width,
    height,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignContents: 'center',
    padding: 20,
  },
  QuestionBox: {
    marginTop: 10,
    flexDirection: 'row',
    height: height / 8,
  },
  QuestionText: {
    color: COLORS.primary,
    flex: 1,
    margin: 5,
    fontSize: 22,
  },
  AnswersBox: {
    marginTop: 30,
    height: height / 2,
    width: '90%',
  },
  Bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 30,
    marginTop: 10,
  },

  Next: {
    color: COLORS.primary,
    fontSize: 18,
  },
});
