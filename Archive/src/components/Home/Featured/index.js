import React from 'react';

import TextBlock from '../../ui/textBlock.js';
import kbMainBackgroundImg from '../../../assets/images/kbmain.jpg';

const Featured = () => {

  return (
    <div class="featured-main" style={{backgroundImage: `url(${kbMainBackgroundImg})`}}>
      <TextBlock text={'KOBE'}/>
    </div>
  );
};

export default Featured;