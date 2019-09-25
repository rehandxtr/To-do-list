import React,{ useState} from 'react'; 
import { View,TextInput,Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props =>{
    const[enteredGoal, setEnteredGoal]=useState('');
 
    const goalHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };


      const addgoalHandler= () =>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');

      }; 
    return(
      <Modal visible={props.visible} animationType="slide"> 
        <View style={styles.Box}>
        <TextInput
         placeholder="Write the goal here" 
         style={styles.Text}
         onChangeText={goalHandler}
         value={enteredGoal} 
         />
          <View style={styles.button}> 
         <Button title=" Cancel" color="red" onPress={props.onCancel} />
        <Button title="Add Goal" onPress={addgoalHandler }/>
        </View>
      </View>
      </Modal>
    );
};
const styles= StyleSheet.create({
    Box:
  {
    justifyContent: 'center',
     alignItems: 'center',
     flex:1,
  },
  Text:{
    width: '70%', 
    borderColor: 'black', 
    borderWidth:1 ,
     padding:10,
     marginBottom:10,
  },
  button:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'60%',
  },
});


export default GoalInput;
        