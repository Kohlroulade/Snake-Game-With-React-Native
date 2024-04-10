import { Fragment } from "react";
import { ImageSourcePropType, Image, StyleSheet, View } from "react-native";
import { Colors } from "../styles/colors";
import { Coordinate } from "../types/types";

export interface SnakeProps {
  coords: Coordinate[];
  headImage: ImageSourcePropType
}

export default function Snake({ coords, headImage }: SnakeProps): JSX.Element {
  return (
    <Fragment>
      <View key={0} style={[styles.head, { left: coords[0].x * 10, top: coords[0].y * 10 }]}>
        <Image source={ headImage } style={{ width: 15, height: 15 }}/>
      </View>
      { 
        coords.slice(1).map((segment: any, index: number) => {
          const segmentStyle = {
            left: segment.x * 10, // adjust for the size of each segment
            top: segment.y * 10,
          };
          return <View key={ index } style={ [styles.body, segmentStyle] } />;
        })
      }
    </Fragment>
  );
}
const styles = StyleSheet.create({
  body: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    position: "absolute",
  },
  head: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    position: "absolute",
  },
});
