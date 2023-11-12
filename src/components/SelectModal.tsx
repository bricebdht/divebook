import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'blue',
    height: 300,
    width: 250,
    borderRadius: 10,
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
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text>This is inside the modal</Text>
          </View>
        </View>
      </Modal>

      <Pressable
        style={styles.buttonStyle}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonTextStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default SelectModal;
