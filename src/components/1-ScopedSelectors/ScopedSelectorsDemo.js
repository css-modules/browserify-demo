import ScopedSelectors from './ScopedSelectors';

import React, { Component } from 'react';

import Snippet from '../shared/Snippet/Snippet';

const fs = require('fs');
const js = fs.readFileSync(__dirname + '/ScopedSelectors.js', 'utf8');
const css = fs.readFileSync(__dirname + '/ScopedSelectors.css', 'utf8');

export default class ScopedSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedSelectors.js', source: js },
      { name: 'ScopedSelectors.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <ScopedSelectors />
      </Snippet>
    );
  }

};
