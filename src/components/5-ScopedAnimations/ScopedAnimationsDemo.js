import ScopedAnimations from './ScopedAnimations';

import React, { Component } from 'react';

import Snippet from '../shared/Snippet/Snippet';

const fs = require('fs');
const js = fs.readFileSync(__dirname + '/ScopedAnimations.js', 'utf8');
const css = fs.readFileSync(__dirname + '/ScopedAnimations.css', 'utf8');
const animationsCss = fs.readFileSync(__dirname + '/../shared/styles/animations.css', 'utf8');

export default class ScopedAnimationsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedAnimations.js', source: js },
      { name: 'ScopedAnimations.css', source: css },
      { name: 'shared/styles/animations.css', source: animationsCss }
    ];

    return (
      <Snippet files={files}>
        <ScopedAnimations />
      </Snippet>
    );
  }

};
