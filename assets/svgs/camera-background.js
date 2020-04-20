import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
   return (
      <Svg width={414} height={736} viewBox="0 0 414 736" fill="none" {...props}>
         <Path
            d="M372.544-277.072c70.063-148.167 234.202-67.663 307.139-36.346 72.937 31.317 130.179 71.694 150.94 210.498 35.778 239.209 27.288 230.229 155.703 374.201 128.414 143.973-20.836 266.933-80.325 298.304-84.039 44.316-212.439-50.62-296.739 82.431-84.301 133.051-199.823 97.466-281.01 11.725-81.188-85.741-58.409-174.2-84.53-248.616C194.487 274.861 58.3 206.662 100.664 57.685c36.723-129.14 239.876-119.283 271.88-334.757z"
            fill="#654CF0"
         />
      </Svg>
   );
}

export default SvgComponent;
