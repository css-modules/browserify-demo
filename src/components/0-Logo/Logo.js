import styles from './Logo.css';

import React, { Component } from 'react';

export default class Logo extends Component {

  // todo: fix rewriteUrl error and use url(./logo.svg) in Logo.css
  render() {
    return <div className={styles.logo} style={{'background-image': 'url("./logo.svg")'}} />;
  }

};
