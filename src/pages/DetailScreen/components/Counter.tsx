import {IconMinus, IconPlus} from 'assets';
import scaling from 'config/scaling';
import React, {Dispatch, SetStateAction} from 'react';
import {
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import colors from 'theme/styles/colors';

type Props = {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
};

const Counter: React.FC<Props> = ({amount, setAmount}) => {
  const increaseHandler = () => {
    setAmount((val: number) => val + 1);
  };
  const decreaseHandler = () => {
    if (amount === 0) {
      ToastAndroid.show('tidak bisa pesan kurang dari 0', ToastAndroid.SHORT);
      return;
    }
    setAmount((val: number) => val - 1);
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={decreaseHandler}>
        <IconMinus />
        {/* <Text style={styles.buttonText}>-</Text> */}
      </Pressable>

      <TextInput
        onChangeText={newText => setAmount(Number(newText))}
        onBlur={() => Keyboard.dismiss()}
        maxLength={3}
        value={String(amount)}
        inputMode="numeric"
        style={styles.text}
      />

      <Pressable style={styles.button} onPress={increaseHandler}>
        <IconPlus />
        {/* <Text style={styles.buttonText}>+</Text> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaling(18),
  },
  button: {
    borderWidth: 0.8,
    borderRadius: scaling(8),
    height: scaling(24),
    width: scaling(24),
    padding: scaling(4),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  buttonText: {
    fontSize: scaling(28),
    color: colors.black,
    position: 'absolute',
    bottom: -6,
  },
  text: {
    color: colors.black,
    fontSize: scaling(18),
  },
});

export default Counter;
