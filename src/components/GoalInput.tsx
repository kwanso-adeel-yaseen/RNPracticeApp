import React, {FC, useState} from 'react';
import {styles} from '../styles';
import {Button, Image, Modal, TextInput, View} from 'react-native';

type Props = {
  onAddGoal: Function;
  open: boolean;
  closeModal: () => void;
};
const GoalInput: FC<Props> = ({onAddGoal, open, closeModal}) => {
  const [value, setValue] = useState('');

  const handleInput = (val: string) => {
    setValue(val);
  };
  const addGoal = () => {
    onAddGoal(value);
    setValue('');
  };
  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goalIcon.png')}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter Goal Title"
          style={styles.input}
          onChangeText={handleInput}
          value={value}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color={'red'} onPress={closeModal} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color={'blue'}
              onPress={addGoal}
              disabled={!value}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
