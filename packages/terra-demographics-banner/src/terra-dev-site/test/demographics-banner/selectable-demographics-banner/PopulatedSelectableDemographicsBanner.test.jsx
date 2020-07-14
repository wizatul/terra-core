import React, { useState } from 'react';
import SelectableDemographicsBanner from '../../../../SelectableDemographicsBanner';
import demographicsImage from '../../../doc/assets/demographicsCat.jpg';

export default () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics Banner Clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        id="populated-demographics-banner"
        applicationContent={<span>BW12N / RAD1232</span>}
        age="28 years"
        avatar={{
          alt: 'BARSTOWE, GEORGIA',
          color: 'neutral',
          image: demographicsImage,
          initials: 'GB',
          isAriaHidden: true,
        }}
        dateOfBirth="07/12/1989"
        gestationalAge="April 11, 2020"
        postMenstrualAge="May 13, 2020"
        gender="F"
        genderAria="Female"
        identifiers={[
          {
            label: 'MRN',
            value: '00019837',
            identifierAria: 'MRN 0 0 0 1 9 8 3 7',
          },
          {
            label: 'FIN',
            value: '1000254085',
            identifierAria: 'FIN 1 0 0 0 2 5 4 0 8 5',
          },
        ]}
        isConfidential
        personName="BARSTOWE, GEORGIA"
        preferredFirstName="Geo"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};
