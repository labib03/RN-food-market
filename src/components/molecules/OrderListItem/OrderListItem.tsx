import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyle from 'theme/styles/global_styles';
import colors from 'theme/styles/colors';

type Props = {
  label: string;
  price?: string;
  value?: string;
  isSecondColor?: boolean;
};

const OrderListItem = ({label, price, isSecondColor, value}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={GlobalStyle.heading_5_secondary}>{label}</Text>
      {price && (
        <Text
          style={[
            {...GlobalStyle.heading_5_primary},
            {color: isSecondColor ? colors.text.green : colors.black},
          ]}>
          RP. {price}
        </Text>
      )}

      {value && <Text style={GlobalStyle.heading_5_primary}>{value}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default OrderListItem;
