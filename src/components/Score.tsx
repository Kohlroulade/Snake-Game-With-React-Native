import { Text, StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import { Colors } from "../styles/colors";

interface ScoreProps {
  score: number;
  imageSource: ImageSourcePropType
}

export default function Score(props: ScoreProps): JSX.Element {
  return (
    <View>
      <Image source={props.imageSource} style={styles.food}/>
      <Text style={styles.text}>{props.score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primary,
  },
  food: {
    width: 30,
    height: 30
  }
});
