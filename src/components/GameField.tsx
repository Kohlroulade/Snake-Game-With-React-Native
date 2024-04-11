import { PropsWithChildren, FC } from "react"
import Snake, { SnakeProps } from "./Snake";
import { Coordinate } from "../types/types";
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from "react-native";
import Food, { FoodProps } from "./Food";

interface GameFieldProps extends PropsWithChildren {
  SnakeProps: SnakeProps,
  Food: FoodProps,
  style: StyleProp<ViewStyle>,
  onLayout: (event: LayoutChangeEvent) => void
}
const GameField: FC<GameFieldProps> = (props) => {
  return (
    <View onLayout={ e => props.onLayout(e) } style={ props.style }>
      <Snake coords={ props.SnakeProps.coords } headImage={ props.SnakeProps.headImage }/>
      <Food x={ props.Food.x } y={ props.Food.y } imageSource={ props.Food.imageSource }/>
    </View>
  )
}

export default GameField;
