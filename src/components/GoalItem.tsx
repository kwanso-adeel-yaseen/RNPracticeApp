import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../styles';

type Props = {
  text: string;
  id: string;
  onDelete: Function;
};
const GoalItem: FC<Props> = ({text, id, onDelete}) => {
  return (
    <View style={styles.goalListItem}>
      <Text style={styles.goalText}>{text}</Text>
      <Button title="Delete" color="red" onPress={() => onDelete(id)} />
    </View>
  );
};

export default GoalItem;
