import React from 'react';

import { Select } from 'antd';

const DiagrammPanel = () => {
  const { Option } = Select;

  return (
    <div className='diagramm-container'>
      <div className='diagramm-text'>
        <div>
          <p id='diagramm-header'>Sales owerview</p>
          <div className='diagramm-value'>
            <img src='/assets/arrowUp.svg' alt='arrow up icon' />
            <p id='diagramm-persent'>4% more</p>
            <p id='diagramm-month'>in May</p>
          </div>
        </div>
        <div>
          <Select className='month-selector' defaultValue='june'>
            <Option value='june'>June</Option>
          </Select>
        </div>
      </div>
      <img id='diagramm' src='/assets/diagrammImage.png' alt='diagramm image' />
    </div>
  );
};

export default DiagrammPanel;
