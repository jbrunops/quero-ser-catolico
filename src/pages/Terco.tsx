import React from 'react';
import PrayerBase from '../components/PrayerBase';
import { getMysteryOfTheDay } from '../utils/prayers';

const Terco = () => {
  return (
    <PrayerBase 
      mode="terco"
      mysterySets={[getMysteryOfTheDay()]}
      showHeader={true}
      showFooter={true}
    />
  );
};

export default Terco;
