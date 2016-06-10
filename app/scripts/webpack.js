import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock.jsx';

(() => {
  if (typeof window !== 'undefined') {
    window.onload = () => {
      const ClockComponent = React.createFactory(Clock);
      ReactDOM.render(ClockComponent(), document.getElementById('react-root'))
    }
  }
})();
