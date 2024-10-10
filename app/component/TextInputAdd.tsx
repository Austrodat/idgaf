import { TextInput, StyleSheet} from "react-native";

interface ITextInputAddProps {
    placeholder: string
    onChangeText: (text: string) => void;
}

function TextInputAdd(props: ITextInputAddProps) {
    const { placeholder, onChangeText } = props;

    return (<TextInput
    style={styles.input}
    placeholder={placeholder}
    onChangeText={onChangeText}
    />)
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

  export default TextInputAdd;