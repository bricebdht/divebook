import React, {SetStateAction, useRef, useState} from 'react';
import {
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'white',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: 'white',
    flex: 9,
    marginHorizontal: 5,
  },
  suffix: {color: 'white', flex: 1},
  focused: {borderColor: 'white'},
});

const CustomInput: React.FC<{
  placeholder: string;
  suffix?: string;
  icon?: React.ReactNode;
  keyboardType?: KeyboardType;
  onInputChange?: (value: SetStateAction<string>) => void;
}> = ({placeholder, suffix, icon, keyboardType = 'default', onInputChange}) => {
  const textInputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (newValue: SetStateAction<string>) => {
    setValue(newValue);
    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, isFocused ? styles.focused : {}]}
      onPress={handleFocus}>
      {icon ? icon : null}
      <TextInput
        ref={textInputRef}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="grey"
        keyboardType={keyboardType}
        onBlur={handleBlur}
        value={value}
        onChangeText={newValue => handleInputChange(newValue)}
      />
      {suffix ? <Text style={styles.suffix}>{suffix}</Text> : null}
    </TouchableOpacity>
  );
};

export default CustomInput;
