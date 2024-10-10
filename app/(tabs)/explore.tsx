import Ionicons from '@expo/vector-icons/Ionicons';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  DimensionValue
} from "react-native";
import {
  TagCross,
  TickCircle,
  Edit2
} from 'iconsax-react-native';
import {
  useEffect, useState
} from 'react';
import TextInputAdd from '../component/TextInputAdd';
import ToDoItem from '../component/ToDoItem';

export interface ITodoItem {
  id: number;
  title: string;
  type: string;
  isActive: boolean;
}

export default function HomeScreen() {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [id, setId] = useState<number>(1);
  const [dataToDo, setDataToDo] = useState<ITodoItem[]>([]);

  const addTodoItem = () => {
    let value = {
      id: new Date().getTime(),
      isActive: false,
      title: title,
      type: type,
    };
    setDataToDo([value,...dataToDo])
  };

  const handleChangeStatus = (item: ITodoItem) => {
    const newDataTodo = dataToDo.map(todo => {
      if(todo.id === item.id) {
        return {...item, isActive: true}
      } else {
        return todo
      }
    })
    setDataToDo(newDataTodo)
  };

  const handleDelete = (item: ITodoItem) => {
    const newDataTodo = dataToDo.filter((todo) => {
      return item.id !== todo.id
    })
    setDataToDo(newDataTodo)
  };
  
  return (
    
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={styles.text}>TODO APP</Text>
      </View>

      <View style={styles.addlist}>
        <View style={styles.inputbox}>

        <TextInputAdd placeholder="Title" onChangeText={(e) => setTitle(e)}/>
        <TextInputAdd placeholder="Type" onChangeText={(e) => setType(e)}/>
        </View>
      <TouchableOpacity 
        style={styles.add}
        onPress={addTodoItem}
      >
      <Text style={[styles.ListTitle, {color: "#fff", fontSize: 25,}]}>ADD</Text></TouchableOpacity>
      </View>

      <ScrollView>
      {dataToDo.map((item) => (
          <ToDoItem/>
      ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addlist: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    height: 85,
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d6d7ef",
    flex: 1,
    gap: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "left",
    color: "#fff",
    height: 118,
    width: 375,
    backgroundColor: "#9395d3",
    padding: 37,
  },
  ListTitle: {
    fontSize: 13,
    color: "#000",
    fontWeight: "600",
  },
  ListDesc: {
    fontSize: 10,
    color: "#000",
    fontWeight: "400",
  },
  ListElement: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    borderRadius: 15,
    alignItems: "center",
    padding: 22,
    marginVertical: 10,
  },
  ListBox: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    gap: 20,
  },
  ListButtonBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    gap: 5,
  },
  add: {
    backgroundColor: "#9395d3",
    width: 106,
    height: 65,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20.5,
  },
  input: {
    height: 29,
    borderBottomColor: "#8B8787",
    borderBottomWidth: 1,
    width: 240,
  },
  inputbox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d6d7ef",
    gap: 20,
  },
});

