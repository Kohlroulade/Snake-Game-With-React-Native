import { StyleSheet, Image, ImageSourcePropType } from "react-native";

export interface FoodProps {
  x: number,
  y: number,
  imageSource: ImageSourcePropType
}
export default function Food(props: FoodProps): JSX.Element {
  return (
    <Image 
      source={props.imageSource} 
      style={[{ top: props.y * 10, left: props.x * 10 }, styles.food]}>
    </Image>
  )
}

const styles = StyleSheet.create({
  food: {
    width: 20,
    height: 20,
    borderRadius: 7,
    position: "absolute",
  },
});
