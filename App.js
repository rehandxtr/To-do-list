import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const[courseGoal, setCourseGoal] = useState([]);
  const[isAdd,setIsAdd]= useState(false);


const addGoal = goalTitle => {
setCourseGoal(currentgoal =>[...courseGoal,
  {id:Math.random().toString(), value: goalTitle}]);
  setIsAdd(false);
};
 
const removeGoal = goalId => {
setCourseGoal(currentGoal=>{
return currentGoal.filter((goal)=>goal.id !==goalId );
});
 } 
const cancelGoal =() => {
setIsAdd(false);

};


  return (
    <View style={{padding:60 }}>
          <Button title="Add new Goal" onPress={()=> setIsAdd(true)} />
  <GoalInput visible={isAdd} onAddGoal={addGoal} onCancel={cancelGoal} />
    <FlatList
    keyExtractor= {(item, index)=> item.id}
    data ={courseGoal}
    renderItem={ItemData =><GoalItem id={ItemData.item.id} onDelete={removeGoal} title={ItemData.item.value}/>}
  />
  </View> 
  );
}
const styles = StyleSheet.create({
});
 