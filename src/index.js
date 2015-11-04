import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('outlet'));
}

export default App;
