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
import { ITodoItem } from "@/app/(tabs)/explore";

interface IToDoItemProps {
    item: ITodoItem;
    handleChangeStatus: (item: ITodoItem) => void;
    handleDelete: (item: ITodoItem) => void;
    handleEdit: (item: ITodoItem) => void;
}

function ToDoItem(props: IToDoItemProps) {
    const { item, handleChangeStatus, handleDelete, handleEdit } = props;

    return (<View style={[styles.ListElement]} key={item.id}>
        <View style={[styles.ListBox]}>
          <Text style={[styles.ListTitle]}>{item.title}</Text>
          <Text style={[styles.ListDesc]}>{item.type}</Text>
          <Text>
            Status {item.isActive ? ": Done" : ": Not Done"}
          </Text>
        </View>
        <View style={[styles.ListButtonBox]}>
          {
            !item.isActive &&
            <TouchableOpacity
              style={[styles.add, { width: 40 }]}
              onPress={() => handleChangeStatus(item)}
            >
              <TickCircle size="32" color="#fff" variant="Bold"/>
            </TouchableOpacity>
          }
          {
            !item.isActive &&
            <TouchableOpacity
              style={[styles.add, { width: 40 }]}
              onPress={() => handleChangeStatus(item)}
            >
              <Edit2 size="32" color="#fff" variant="Bold"/>
            </TouchableOpacity>
          }
        <TouchableOpacity
          style={[styles.add, { width: 40 }]}
          onPress={() => handleDelete(item)}
        >
          <TagCross size="32" color="#fff" variant="Bold"/>
        </TouchableOpacity>
        </View>    
      </View>
      )
};

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

  export default ToDoItem;