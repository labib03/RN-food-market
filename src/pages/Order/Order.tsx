import React from 'react';

import EmptyOrder from 'pages/EmptyOrder/EmptyOrder';
import {Text, View} from 'react-native';

const Order = () => {
  const [isEmptyOrder, setIsEmptyOrder] = React.useState<boolean>(true);

  if (isEmptyOrder) {
    return <EmptyOrder />;
  }

  return (
    <View>
      <Text>User Mempunyai Pesanan</Text>
    </View>
  );
};

export default Order;
