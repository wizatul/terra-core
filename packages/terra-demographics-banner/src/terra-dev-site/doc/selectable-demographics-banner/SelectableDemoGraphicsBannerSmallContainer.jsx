import React from 'react';
import classNames from 'classnames/bind';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';
import styles from '../example/DemographicsBannerSmallContainer.module.scss';

const cx = classNames.bind(styles);

const SelectableDemoGraphicsBannerSmallContainer = () => (
  <div className={cx('content-wrapper')}>
    <SelectableDemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={[
        {
          label: 'MRN',
          value: '12343',
          identifierAria: 'MRN 1 2 3 4 5',
        },
        {
          label: 'REA',
          value: '3JSDA',
          identifierAria: 'R E A 3JSDA',
        },
      ]}
      personName="Johnathon Doe"
      preferredFirstName="John"
      // eslint-disable-next-line no-alert
      onClick={() => alert('Demographics banner clicked!')}
    />
  </div>
);

export default SelectableDemoGraphicsBannerSmallContainer;
