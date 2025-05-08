import React from 'react';
import PrayerBase from '../components/PrayerBase';
import { getMysteryOfTheDay } from '../utils/prayers';

const PrayerApp = () => {
  return (
    <PrayerBase 
      mode="terco"
      mysterySets={[getMysteryOfTheDay()]}
      showHeader={false}
      showFooter={false}
    />
  );
};

export default PrayerApp;
