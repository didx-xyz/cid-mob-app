import * as React from 'react';
import Svg, {
   Path, Mask, Defs, LinearGradient, Stop,
} from 'react-native-svg';

function SvgComponent(props) {
   return (
      <Svg width={157} height={32} viewBox="0 0 157 32" fill="none" {...props}>
         <Path
            d="M82.511 1.544c2.07 0 3.461 2.12 2.64 4.018L76.03 26.634a3.591 3.591 0 01-3.296 2.164h-1.508a3.593 3.593 0 01-3.3-2.17l-8.94-20.723c-.89-2.062.622-4.36 2.868-4.36 1.252 0 2.383.747 2.874 1.898l7.483 17.568 7.66-17.732a2.876 2.876 0 012.64-1.735zM89.165 4.698a3.154 3.154 0 016.308 0v20.947a3.154 3.154 0 01-6.308 0V4.698zM100.734 17.838a2.433 2.433 0 012.433-2.433h6.152a2.433 2.433 0 010 4.867h-6.152a2.433 2.433 0 01-2.433-2.434zM116.959 4.698a3.154 3.154 0 016.308 0v20.947a3.154 3.154 0 01-6.308 0V4.698zM128.829 6.072c0-2.5 2.027-4.528 4.528-4.528h7.853c2.959 0 5.568.571 7.826 1.713 2.284 1.116 4.049 2.7 5.295 4.75 1.272 2.05 1.908 4.439 1.908 7.164 0 2.726-.636 5.114-1.908 7.164-1.246 2.05-3.011 3.647-5.295 4.79-2.258 1.115-4.867 1.673-7.826 1.673h-7.853a4.528 4.528 0 01-4.528-4.527V6.07zm12.07 17.548c2.725 0 4.892-.753 6.502-2.258 1.635-1.532 2.453-3.595 2.453-6.19 0-2.596-.818-4.647-2.453-6.152-1.61-1.532-3.777-2.298-6.502-2.298h-5.763V23.62h5.763z"
            fill="#fff"
         />
         <Path
            d="M40.947 8.193l.564-.71-.564.71zm4.044 3.214l.563-.71-.563.71zm0 7.088l-.564-.708.564.709zm-4.038 3.21l-.563-.71.563.71zm-1.645 2.782l.892.152-.892-.152zm-.004-19.063l.892-.155-.892.155zm1.08 3.478l4.043 3.214 1.127-1.418-4.043-3.214-1.127 1.418zm4.043 8.885l-4.037 3.209 1.127 1.418 4.037-3.21-1.127-1.417zm-6.012 6.547l-.134.786 1.785.305.134-.786-1.785-.305zM40.196 5.27l-.13-.75-1.785.31.13.75 1.785-.31zm4.231 6.847a3.622 3.622 0 010 5.67l1.127 1.418c2.737-2.175 2.737-6.33 0-8.506l-1.127 1.418zm-2.916-4.632a3.622 3.622 0 01-1.315-2.215l-1.784.31a5.433 5.433 0 001.972 3.323l1.127-1.418zM40.39 20.996a5.433 5.433 0 00-1.975 3.338l1.785.305a3.622 3.622 0 011.317-2.225l-1.127-1.418z"
            fill="#03F5A9"
         />
         <Path
            d="M44.197 21.754l.564-.71-.564.71zm-4.103-3.262l-.563.71.563-.71zm-.046-7.051l-.572-.702.572.702zM44.263 8l.572.7-.572-.7zm1.587-2.677l-.89-.166.89.166zm-.01 19.198l-.891.155.892-.155zm-1.08-3.477l-4.102-3.262-1.127 1.418 4.103 3.261 1.127-1.417zm-4.139-8.903l4.214-3.44-1.145-1.403-4.214 3.44 1.145 1.403zM46.74 5.49l.121-.65-1.78-.333-.121.65 1.78.333zm-1.791 19.187l.13.75 1.785-.31-.131-.75-1.784.31zm-4.291-6.893a3.622 3.622 0 01-.037-5.642l-1.145-1.403c-2.686 2.193-2.659 6.305.055 8.462l1.127-1.418zm2.976 4.678a3.622 3.622 0 011.315 2.215l1.784-.31a5.434 5.434 0 00-1.972-3.322l-1.127 1.417zm1.201-13.76A5.433 5.433 0 0046.74 5.49l-1.78-.332a3.622 3.622 0 01-1.27 2.14l1.145 1.404z"
            fill="#fff"
         />
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.624 1.455a2.717 2.717 0 10-2.28 4.931 9.282 9.282 0 014.526 12.321l-.004.01a9.279 9.279 0 01-12.317 4.517 2.717 2.717 0 00-2.28 4.93A14.715 14.715 0 0055.8 20.989l.006-.013a14.714 14.714 0 00-7.183-19.52z"
            fill="url(#prefix__paint0_linear)"
         />
         <Mask id="prefix__a" fill="#fff">
            <Path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M33.8 10.853a9.282 9.282 0 004.543 12.285 2.717 2.717 0 01-2.28 4.931A14.714 14.714 0 1148.418 1.36a2.717 2.717 0 01-2.282 4.932A9.282 9.282 0 0033.8 10.853z"
            />
         </Mask>
         <Path
            d="M33.8 10.853l-4.898-2.35-.022.045-.021.045 4.94 2.26zm-.834 3.485l5.429.22-5.429-.22zm.562 3.577l5.1-1.873-5.1 1.873zm1.888 3.09l-3.994 3.684 3.994-3.683zm2.927 2.133l2.281-4.93-2.28 4.93zm1.325 3.606l4.931 2.282-4.93-2.282zm-3.606 1.325l-2.281 4.932 2.281-4.932zm-4.64-3.38l3.994-3.683-3.994 3.683zm-2.994-4.9l5.1-1.874-5.1 1.874zm-.89-5.672l-5.43-.22 5.43.22zm1.347-5.58l4.931 2.28-4.93-2.28zm.021-.046l4.89 2.37.017-.036.017-.036-4.923-2.298zm3.36-4.595l3.683 3.995-3.683-3.995zm4.9-2.993l1.873 5.1-1.873-5.1zm5.672-.89l.22-5.43-.22 5.43zm5.58 1.347l-2.28 4.93 2.28-4.93zm1.325 3.606l-4.93-2.281 4.93 2.28zM46.137 6.29L48.42 1.36l-2.282 4.93zm-3.52-.85l.22-5.429-.22 5.429zm-3.578.562l-1.873-5.1 1.873 5.1zM35.95 7.89l3.683 3.994-3.683-3.994zm-2.133 2.927l4.931 2.281-4.93-2.281zM28.86 8.593a14.715 14.715 0 00-1.322 5.524l10.858.441c.02-.5.138-.99.345-1.444l-9.881-4.52zm-1.322 5.524c-.078 1.931.225 3.858.891 5.672l10.2-3.747a3.848 3.848 0 01-.233-1.484l-10.858-.44zm.891 5.672a14.716 14.716 0 002.994 4.9l7.989-7.366a3.85 3.85 0 01-.783-1.281l-10.2 3.747zm2.994 4.9a14.714 14.714 0 004.64 3.38l4.562-9.862a3.848 3.848 0 01-1.213-.884l-7.99 7.366zm4.64 3.38a2.717 2.717 0 01-1.325-3.606l9.862 4.563a8.15 8.15 0 00-3.975-10.819l-4.562 9.862zm-1.325-3.606a2.717 2.717 0 013.606-1.325l-4.562 9.863a8.15 8.15 0 0010.818-3.975l-9.862-4.563zm3.606-1.325a9.282 9.282 0 01-2.927-2.132l-7.989 7.365a20.148 20.148 0 006.354 4.63l4.562-9.863zm-2.927-2.132a9.283 9.283 0 01-1.888-3.09l-10.2 3.747a20.148 20.148 0 004.1 6.708l7.988-7.365zm-1.888-3.09a9.28 9.28 0 01-.562-3.578l-10.857-.441a20.15 20.15 0 001.22 7.766l10.199-3.748zm-.562-3.578a9.282 9.282 0 01.85-3.52l-9.862-4.563a20.148 20.148 0 00-1.845 7.642l10.857.44zm.85-3.52a2.416 2.416 0 01-.02.043l-9.779-4.74a8.224 8.224 0 00-.063.134l9.862 4.562zm.014-.029a9.282 9.282 0 012.119-2.898L28.584-.1a20.147 20.147 0 00-4.6 6.292l9.846 4.596zm2.119-2.898a9.282 9.282 0 013.09-1.888l-3.747-10.2a20.148 20.148 0 00-6.709 4.099L35.95 7.89zm3.09-1.888a9.282 9.282 0 013.578-.562l.441-10.858a20.148 20.148 0 00-7.766 1.22l3.747 10.2zm3.578-.562a9.282 9.282 0 013.52.85L50.7-3.571a20.147 20.147 0 00-7.642-1.846l-.44 10.858zm3.52.85a2.717 2.717 0 01-1.325-3.606l9.863 4.562A8.15 8.15 0 0050.7-3.57L46.137 6.29zm-1.325-3.606A2.717 2.717 0 0148.42 1.36l-4.563 9.862a8.15 8.15 0 0010.819-3.975l-9.863-4.562zM48.42 1.36A14.715 14.715 0 0042.838.012l-.441 10.857c.505.021 1 .14 1.46.353l4.562-9.862zM42.838.012a14.715 14.715 0 00-5.672.89l3.747 10.2a3.848 3.848 0 011.484-.232l.44-10.858zm-5.672.89a14.715 14.715 0 00-4.9 2.994l7.366 7.99a3.848 3.848 0 011.281-.784L37.166.902zm-4.9 2.994a14.713 14.713 0 00-3.38 4.64l9.862 4.563c.212-.459.512-.871.884-1.214l-7.366-7.989zm-3.38 4.64l.015-.033 9.797 4.701.05-.105-9.863-4.562z"
            fill="url(#prefix__paint1_linear)"
            mask="url(#prefix__a)"
         />
         <Path
            d="M21.79 7.667a10.882 10.882 0 00-7.884-3.366C7.883 4.301 3 9.177 3 15.191s4.883 10.89 10.906 10.89c3.1 0 5.898-1.293 7.884-3.367"
            stroke="#fff"
            strokeWidth={5.338}
            strokeLinecap="round"
         />
         <Path
            d="M37.416 25.704a11.393 11.393 0 004.562 1.102"
            stroke="url(#prefix__paint2_linear)"
            strokeWidth={5.433}
            strokeLinecap="round"
         />
         <Defs>
            <LinearGradient
               id="prefix__paint0_linear"
               x1={57.105}
               y1={12.451}
               x2={48.381}
               y2={23.588}
               gradientUnits="userSpaceOnUse"
            >
               <Stop stopColor="#654CF0" />
               <Stop offset={1} stopColor="#03F5A9" />
            </LinearGradient>
            <LinearGradient
               id="prefix__paint1_linear"
               x1={30.345}
               y1={24.142}
               x2={41.681}
               y2={5.518}
               gradientUnits="userSpaceOnUse"
            >
               <Stop stopColor="#654CF0" />
               <Stop offset={1} stopColor="#fff" />
            </LinearGradient>
            <LinearGradient
               id="prefix__paint2_linear"
               x1={55.645}
               y1={18.002}
               x2={42.105}
               y2={25.849}
               gradientUnits="userSpaceOnUse"
            >
               <Stop stopColor="#654CF0" stopOpacity={0} />
               <Stop offset={0} stopColor="#0BE8AF" stopOpacity={0.922} />
               <Stop offset={1} stopColor="#03F5A9" />
            </LinearGradient>
         </Defs>
      </Svg>
   );
}

export default SvgComponent;
