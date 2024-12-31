import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

import '../public/styles/waveText.css';

const AnimFeTurbulence = animated('feTurbulence');
const AnimFeDisplacementMap = animated('feDisplacementMap');

export default function WaveText({ text, size = 72 }) { // Added size prop with a default value of 72
  // Set the initial state to true to trigger the animation on mount
  const [open, setOpen] = useState(true);

  // Optionally, use useEffect to ensure the animation starts on mount
  useEffect(() => {
    setOpen(true);
  }, []);

  const [{ freq, factor, scale, opacity }] = useSpring(() => ({
    reverse: open,
    from: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
    to: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
    config: { duration: 3000 },
  }));

  return (
    <div className="container">
      <animated.svg className="svg-width" style={{ scale, opacity }} viewBox="0 0 1278 446">
        <defs>
          <filter id="waves">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" result="TURB" seed="8" />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#waves)">
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={size} // Dynamically adjust font size based on the prop
            fill="#ffffff"
            style={{ fontFamily: 'sans-serif' }}
          >
            {text}
          </text>
        </g>
      </animated.svg>
    </div>
  );
}
