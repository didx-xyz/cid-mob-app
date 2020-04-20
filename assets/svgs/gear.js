import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function (props) {
   return (
      <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
         <Path
            d="M19.798 8.514h0l.803-1.921s0 0 0 0a.439.439 0 000-.341.44.44 0 00-.24-.243l-2.449-1.022a.475.475 0 00-.583.24l-.802 1.92v.001a1.477 1.477 0 01-1.389.922 1.476 1.476 0 01-1.381-.93l-.791-1.925a.447.447 0 00-.582-.243L9.93 5.98a.447.447 0 00-.243.581l.791 1.926a1.476 1.476 0 01-.328 1.632c-.44.44-1.069.557-1.635.321h-.001l-1.92-.802a.475.475 0 00-.584.24l-1.022 2.449a.44.44 0 000 .341.44.44 0 00.24.242s0 0 0 0l1.92.802h.001c.57.238.923.77.921 1.387a1.476 1.476 0 01-.929 1.383l-1.926.791a.447.447 0 00-.242.582L5.98 20.31a.447.447 0 00.582.243l1.926-.791a1.476 1.476 0 011.632.329c.437.438.559 1.065.322 1.634h0l-.803 1.921s0 0 0 0a.439.439 0 000 .341.44.44 0 00.24.243l2.449 1.022a.474.474 0 00.583-.24h0l.801-1.92v-.001c.239-.569.77-.923 1.388-.921h0a1.477 1.477 0 011.383.929l.791 1.925a.447.447 0 00.582.243l2.454-1.008a.447.447 0 00.242-.582l-.79-1.925a1.477 1.477 0 01.328-1.633 1.476 1.476 0 011.635-.321h0l1.92.802s0 0 0 0a.475.475 0 00.584-.24l1.022-2.448a.439.439 0 000-.342.44.44 0 00-.24-.242l-5.214-8.814zm0 0a1.477 1.477 0 00.321 1.634 1.476 1.476 0 001.633.33l1.926-.792a.447.447 0 01.581.243l1.009 2.454a.447.447 0 01-.243.582l-1.925.791c-.57.235-.929.764-.93 1.383a1.478 1.478 0 00.921 1.387h0l1.92.802-5.213-8.814z"
            stroke="#1A0B3D"
            strokeWidth={1.4}
         />
         <Path
            d="M15.122 11.195c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
            stroke="#1A0B3D"
            strokeWidth={0.7}
         />
      </Svg>
   );
}
