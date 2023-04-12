import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, FoodListItem, Header, OrderListItem} from 'components';
import GlobalStyle from 'theme/styles/global_styles';
import {FoodItem2} from 'assets';
import colors from 'theme/styles/colors';
import scaling from 'config/scaling';

const OrderSummary = () => {
  return (
    <View style={GlobalStyle.RootContainer}>
      <Header
        title="Payment"
        subtitle="You deserve better meal"
        isRenderBackButton
      />

      <View style={styles.wrapper}>
        <View>
          <Text style={styles.heading}>Item Ordered</Text>
          <FoodListItem
            imagePath={FoodItem2}
            title="Cherry Healthy"
            price="50.000"
            totalItems={14}
          />
        </View>

        <View>
          <Text style={styles.heading}>Details Transaction</Text>
          <View style={styles.detailWrapper}>
            <OrderListItem label="Cherry Healthy" price="250.000" />
            <OrderListItem label="Driver" price="5.000" />
            <OrderListItem label="Tax 10%" price="50.000" />
            <OrderListItem label="Total Price" price="500.000" isSecondColor />
          </View>
        </View>
      </View>

      <View style={styles.wrapper}>
        <View>
          <Text style={styles.heading}>Details Transaction</Text>
          <View style={styles.detailWrapper}>
            <OrderListItem label="Name" value="Angga Risky" />
            <OrderListItem label="Phone" value="0876 7865 2345" />
            <OrderListItem label="Address" value="Margajaya" />
            <OrderListItem label="House No" value="A56" />
            <OrderListItem label="City" value="Bogor" />
          </View>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          color={colors.secondary}
          label="Checkout Now"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: scaling(24),
    paddingVertical: scaling(16),
    gap: scaling(14),
    marginTop: scaling(24),
  },
  heading: {...GlobalStyle.heading_4_primary, marginBottom: scaling(8)},
  detailWrapper: {gap: scaling(2)},
  buttonWrapper: {
    paddingHorizontal: scaling(26),
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: scaling(10),
  },
});

export default OrderSummary;
