import React from 'react';
import PrayerBase from '../components/PrayerBase';

const RosaryApp = () => {
  return (
    <PrayerBase 
      mode="rosario"
      mysterySets={['joyful', 'luminous', 'sorrowful', 'glorious']}
      showHeader={false}
      showFooter={false}
    />
  );
};

export default RosaryApp; 