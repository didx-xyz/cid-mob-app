import * as React from 'react';
import Svg, {
   Path, Defs, LinearGradient, Stop,
} from 'react-native-svg';

function SvgComponent(props) {
   return (
      <Svg width={171} height={171} viewBox="0 0 171 171" fill="none" {...props}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M167.545 39.727a3.455 3.455 0 11.001-6.91 3.455 3.455 0 01-.001 6.91zm-3.454-36.272a3.454 3.454 0 106.908 0 3.454 3.454 0 00-6.908 0zm-32.818 0a3.454 3.454 0 106.908 0 3.454 3.454 0 00-6.908 0zm-29.364 3.454a3.454 3.454 0 110-6.909 3.454 3.454 0 010 6.91zM65.636 3.455a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zM36.273 6.909a3.455 3.455 0 110-6.909 3.455 3.455 0 010 6.91zM0 3.455a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zm131.273 32.818a3.454 3.454 0 106.908 0 3.454 3.454 0 00-6.908 0zm-29.364 3.454a3.454 3.454 0 110-6.909 3.454 3.454 0 010 6.91zm-3.455 29.364a3.454 3.454 0 106.91 0 3.454 3.454 0 00-6.91 0zm3.455 36.273a3.455 3.455 0 110-6.91 3.455 3.455 0 010 6.91zm-3.455 29.363a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zM101.91 171a3.455 3.455 0 110-6.91 3.455 3.455 0 010 6.91zM65.636 36.273a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zm-29.363 3.454a3.455 3.455 0 110-6.909 3.455 3.455 0 010 6.91zM0 36.273a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zm167.545 36.273a3.455 3.455 0 11.001-6.91 3.455 3.455 0 01-.001 6.91zm-36.272-3.455a3.454 3.454 0 106.908.001 3.454 3.454 0 00-6.908-.001zm-62.182 3.455a3.455 3.455 0 110-6.91 3.455 3.455 0 010 6.91zM32.818 69.09a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zM3.455 72.545a3.455 3.455 0 110-6.909 3.455 3.455 0 010 6.91zM164.09 101.91a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zm-29.364 3.455a3.454 3.454 0 110-6.909 3.454 3.454 0 010 6.909zm-69.09-3.455a3.455 3.455 0 106.909 0 3.455 3.455 0 00-6.91 0zm-29.364 3.455a3.455 3.455 0 110-6.91 3.455 3.455 0 010 6.91zM0 101.909a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zm167.545 36.273a3.455 3.455 0 11.002-6.91 3.455 3.455 0 01-.002 6.91zm-36.272-3.455a3.454 3.454 0 106.909.001 3.454 3.454 0 00-6.909-.001zm-62.182 3.455a3.455 3.455 0 110-6.91 3.455 3.455 0 010 6.91zm-36.273-3.455a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zm-29.363 3.455a3.455 3.455 0 110-6.91 3.455 3.455 0 010 6.91zm160.636 29.363a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0zM134.727 171a3.454 3.454 0 110-6.909 3.454 3.454 0 010 6.909zm-69.09-3.455a3.455 3.455 0 106.909 0 3.455 3.455 0 00-6.91 0zM36.272 171a3.455 3.455 0 110-6.91 3.455 3.455 0 010 6.91zM0 167.545a3.455 3.455 0 106.91 0 3.455 3.455 0 00-6.91 0z"
            fill="url(#prefix__paint0_linear)"
         />
         <Defs>
            <LinearGradient
               id="prefix__paint0_linear"
               x1={171}
               y1={85.5}
               x2={0}
               y2={85.5}
               gradientUnits="userSpaceOnUse"
            >
               <Stop stopColor="#E0DDF7" />
               <Stop offset={1} stopColor="#E0DDF7" stopOpacity={0} />
            </LinearGradient>
         </Defs>
      </Svg>
   );
}

export default SvgComponent;
