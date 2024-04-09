import { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { Colors } from "../styles/colors";

const Footer: FC<PropsWithChildren> = (props) => {
    return (<View style={styles.container}>{props.children}</View>)
}

const styles = {  
  container: { 
    borderColor: Colors.primary,
    borderWidth: 10,
    backgroundColor: Colors.background,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopWidth: 0,
    padding: 10
  }  
};

export default Footer;