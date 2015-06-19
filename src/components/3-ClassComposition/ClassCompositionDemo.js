import ClassComposition from './ClassComposition';

import React, { Component } from 'react';

import Snippet from '../shared/Snippet/Snippet';

const fs = require('fs');
const js = fs.readFileSync(__dirname + '/StyleVariantA/StyleVariantA.js', 'utf8');
const css = fs.readFileSync(__dirname + '/StyleVariantA/StyleVariantA.css', 'utf8');
const layoutCss = fs.readFileSync(__dirname + '/../shared/styles/layout.css', 'utf8');
const typographyCss = fs.readFileSync(__dirname + '/../shared/styles/typography.css', 'utf8');

export default class ClassCompositionDemo extends Component {

  render() {
    const files = [
      { name: 'StyleVariantA.js', source: js },
      { name: 'StyleVariantA.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <ClassComposition />
      </Snippet>
    );
  }

};
