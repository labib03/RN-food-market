import scaling from 'config/scaling';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {capitalizeEachFirstWorld} from 'utils/helpers/common';

type Props = {
  label: string;
};

const Select: React.FC<Props> = ({label}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Jakarta', value: 'jakarta'},
    {label: 'Bandung', value: 'bandung'},
  ]);

  return (
    <View>
      <Text style={styles.label}>{capitalizeEachFirstWorld(label)}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable
        searchContainerStyle={{
          borderBottomColor: 'transparent',
        }}
        stickyHeader={true}
        listMode="MODAL"
        style={styles.textInput}
        modalProps={{
          animationType: 'slide',
        }}
        modalTitle="Select an item"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: scaling(16),
    letterSpacing: 0.5,
    marginBottom: scaling(4),
  },
  textInput: {
    borderWidth: 0.4,
    borderColor: '#020202',
    borderRadius: scaling(12),
  },
});

export default Select;
