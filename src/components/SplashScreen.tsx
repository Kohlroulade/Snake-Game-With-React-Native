import { FC } from "react";
import { Button, StyleSheet, View, Text } from "react-native";


interface SpashScreenProps {
    onLoaded: (type: "Carsten" | "Sarah") => void;
}
const SplashScreen: FC<SpashScreenProps> = (props) => {
    return (
        <View style={styles.container} >
            <Text style={ styles.text }>Bist du eine Sarah oder ein Carsten?<br /></Text>
            <View style={ styles.buttons }>
                <Button title="Carsten" onPress={ () => props.onLoaded("Carsten") }/>
                <Button title="Sarah" onPress={ () => props.onLoaded("Sarah") }/>
            </View>
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: "row", 
        justifyContent: "center", 
        gap: 4 
    },
    text: {
        fontSize: 14,
        textAlign: "center",
        marginBottom: 10
    }
})