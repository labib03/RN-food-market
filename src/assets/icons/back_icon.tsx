import colors from 'theme/styles/colors';
import React from 'react';
import {G, Path, Svg} from 'react-native-svg';

type Props = {
  width?: string;
  height?: string;
  color: string;
};

const BackIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color = colors.black,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G id="arrow_back_ios_24px">
        <Path
          id="icon/navigation/arrow_back_ios_24px"
          d="M17.835 3.86998L16.055 2.09998L6.16501 12L16.065 21.9L17.835 20.13L9.70501 12L17.835 3.86998Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default BackIcon;
