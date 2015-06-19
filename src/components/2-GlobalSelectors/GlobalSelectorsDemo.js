import GlobalSelectors from './GlobalSelectors';

import React, { Component } from 'react';

import Snippet from '../shared/Snippet/Snippet';

const fs = require('fs');
const js = fs.readFileSync(__dirname + '/GlobalSelectors.js', 'utf8');
const css = fs.readFileSync(__dirname + '/GlobalSelectors.css', 'utf8');

export default class GlobalSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'GlobalSelectors.js', source: js },
      { name: 'GlobalSelectors.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <GlobalSelectors />
      </Snippet>
    );
  }

};
