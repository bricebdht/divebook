import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    height: 300,
    width: 250,
    backgroundColor: 'yellow',
  },
  buttonStyle: {
    height: 50,
    width: 150,
    backgroundColor: 'green',
  },
  buttonTextStyle: {
    color: 'white',
  },
});

const SelectModal: React.FC<{options: string[]}> = ({options}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text>Here</Text>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <Text>This is inside the modal</Text>
        </View>
      </Modal>
      <Text>Here is my new component</Text>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonTextStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default SelectModal;
