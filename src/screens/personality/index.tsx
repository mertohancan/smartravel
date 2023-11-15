import React from 'react';

import Questions from './components/questions';
import Layout from '../../components/layout';
import { MOCK_PERSONALITY_QUESTIONS } from '../../mock-data/personality';

const Personality = () => {
  return (
    <Layout>
      <Questions questions={MOCK_PERSONALITY_QUESTIONS} />
    </Layout>
  );
};

export default Personality;
