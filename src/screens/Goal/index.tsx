import React, {useState} from 'react';
import {Button, FlatList, View} from 'react-native';
import GoalInput from '../../components/GoalInput';
import GoalItem from '../../components/GoalItem';
import {styles} from '../../styles';

const GoalScreen = () => {
  const [goals, setGoals] = useState<any>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  const addGoal = (value: string) => {
    setGoals((prevGoal: any) => [
      ...prevGoal,
      {text: value, id: Math.random().toString()},
    ]);
    handleModalClose();
  };
  const onDeleteGoal = (id: string) => {
    setGoals((val: any) => {
      return val.filter((goal: any) => goal.id !== id);
    });
  };
  return (
    <View>
      <Button title="Add New Goal" onPress={handleModalOpen} />
      <GoalInput
        onAddGoal={addGoal}
        open={openModal}
        closeModal={handleModalClose}
      />
      <View style={styles.goals}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData?.item?.text}
                id={itemData?.item?.id}
                onDelete={onDeleteGoal}
              />
            );
          }}
          keyExtractor={item => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
};

export default GoalScreen;
