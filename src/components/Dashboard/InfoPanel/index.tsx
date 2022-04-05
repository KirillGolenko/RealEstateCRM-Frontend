import React from 'react';

import infoPannel from '../../../store/infoPannel';

const InfoPanel = () => {
  const { data } = infoPannel;

  return (
    <div className='info-pannel-container'>
      {data.map((item, index) => (
        <div className='info-pannel-item' key={`info-pannel-item-${index}`}>
          <div>
            <p className='info-pannel-item-name'>{item.name}</p>
            <div className='info-pannel-values'>
              <p className='info-pannel-item-value'>{item.value}</p>
              <p
                className={
                  item.dinamiks > 0 ? 'positive-dinamiks' : 'negative-dinamiks'
                }
              >
                {item.dinamiks > 0 && '+'}
                {item.dinamiks}
              </p>
            </div>
          </div>
          <div className='info-item-logo-container'>
            <img src={item.logo} alt='info pannel logo' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoPanel;
