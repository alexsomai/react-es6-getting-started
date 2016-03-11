import React from 'react';
import ReactDOM from 'react-dom';
import SliderApp from './SliderApp';
import MountUsageApp from './MountUsageApp';
import UpdatingApp from './UpdatingApp';

ReactDOM.render(
  <div>
    <SliderApp />
    <MountUsageApp />
    <UpdatingApp />
  </div>,
  document.getElementById('app')
);
