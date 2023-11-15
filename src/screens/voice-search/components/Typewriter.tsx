import React, { useState, useEffect } from 'react';

import { P2 } from '../../../components/typography';
import { COLORS } from '../../../constants/colors';
import { isAndroid } from '../../../utils/utils';

interface Props {
  text: string;
  delay?: number;
}

const Typewriter = ({ text, delay = 20 }: Props) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <P2
      style={{
        color: COLORS.primary,
        fontSize: 16,
        lineHeight: 24,
      }}>
      {currentText}
    </P2>
  );
};

export default Typewriter;
