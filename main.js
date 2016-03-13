import React from 'react';
import ReactDOM from 'react-dom';
import SliderApp from './SliderApp';
import MountUsageApp from './MountUsageApp';
import UpdatingApp from './UpdatingApp';
import HOCApp from './HOCApp';
import CCApp from './CCApp';
import DGCApp from './DGCApp';
import CompilerApp from './CompilerApp';

ReactDOM.render(
  <div>
    <SliderApp />
    <MountUsageApp />
    <UpdatingApp />
    <HOCApp />
    <DGCApp />
    <CompilerApp />
  </div>,
  document.getElementById('app')
);
