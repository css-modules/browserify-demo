import CompositionOverrides from './CompositionOverrides';

import React, { Component } from 'react';

import Snippet from '../shared/Snippet/Snippet';

const fs = require('fs');
const js = fs.readFileSync(__dirname + '/CompositionOverrides.js', 'utf8');
const css = fs.readFileSync(__dirname + '/CompositionOverrides.css', 'utf8');
const layoutCss = fs.readFileSync(__dirname + '/../shared/styles/layout.css', 'utf8');
const typographyCss = fs.readFileSync(__dirname + '/../shared/styles/typography.css', 'utf8');

export default class CompositionOverridesDemo extends Component {

  render() {
    const files = [
      { name: 'CompositionOverrides.js', source: js },
      { name: 'CompositionOverrides.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <CompositionOverrides />
      </Snippet>
    );
  }

};
