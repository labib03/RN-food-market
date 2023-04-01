import React from 'react';
import {View} from 'react-native';
import {
  IconHomeActive,
  IconHomeInactive,
  IconOrderActive,
  IconOrderInactive,
  IconProfileActive,
  IconProfileInactive,
} from 'assets';

type Props = {
  label: string;
  focus: boolean;
};

const Icon = ({label, focus}: Props) => {
  const renderIcon = (labelProps: any) => {
    switch (labelProps) {
      case 'home':
        return focus ? <IconHomeActive /> : <IconHomeInactive />;
      case 'order':
        return focus ? <IconOrderActive /> : <IconOrderInactive />;
      case 'profile':
        return focus ? <IconProfileActive /> : <IconProfileInactive />;
    }
  };

  return <View>{renderIcon(label.toLowerCase())}</View>;
};

export default Icon;
