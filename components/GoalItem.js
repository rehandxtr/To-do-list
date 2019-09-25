import React from 'react'; 
import { View,Text, StyleSheet,TouchableOpacity} from 'react-native';

const GoalItem = props =>{
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
    <View style={styles.list}>
    <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
     );
};
const styles= StyleSheet.create({
        list:
  {
    backgroundColor:'#ccc',
    borderWidth:1,
    marginVertical:10,
    borderColor: 'black',
    padding:10
  }
});
export default GoalItem;