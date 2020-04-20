import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export default function (props) {
   return (
      <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
         <Rect
            x={9.6}
            y={17.6}
            width={20}
            height={15.238}
            rx={3.5}
            stroke="#1A0B3D"
            strokeWidth={1.4}
         />
         <Path
            d="M12.8 15.599a6.8 6.8 0 016.8-6.8v0a6.8 6.8 0 016.8 6.8v2H12.8v-2z"
            stroke="#1A0B3D"
            strokeWidth={1.4}
         />
         <Path
            d="M20.6 25.839l-.179-.3-.17.101v.199h.35zm-2 0h.35v-.199l-.17-.102-.18.301zm2.65-1.782c0 .636-.335 1.188-.829 1.481l.358.602a2.418 2.418 0 001.171-2.083h-.7zM19.6 22.35c.902 0 1.65.755 1.65 1.707h.7c0-1.32-1.043-2.407-2.35-2.407v.7zm-1.65 1.707c0-.952.748-1.707 1.65-1.707v-.7c-1.307 0-2.35 1.087-2.35 2.407h.7zm.83 1.481a1.718 1.718 0 01-.83-1.48h-.7c0 .886.469 1.664 1.171 2.082l.358-.602zm.17 2.662v-2.36h-.7v2.36h.7zm.65.65a.65.65 0 01-.65-.65h-.7c0 .745.605 1.35 1.35 1.35v-.7zm.65-.65a.65.65 0 01-.65.65v.7a1.35 1.35 0 001.35-1.35h-.7zm0-2.361v2.36h.7v-2.36h-.7z"
            fill="#1A0B3D"
         />
      </Svg>
   );
}
