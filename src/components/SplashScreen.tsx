import { FC } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SpashScreenProps {
    onLoaded: (type: "Carsten" | "Sarah") => void;
}
const SplashScreen: FC<SpashScreenProps> = (props) => {
    return (
        <View style={styles.container} >
            <Text style={ styles.text }>Bist du eine Sarah oder ein Carsten?<br /></Text>
            <View style={ styles.buttonContainer }>                
                <TouchableOpacity onPress={ () => props.onLoaded("Sarah") }style={ styles.button }>
                    <Image source={{ uri: "./../../assets/Sarah.png" }} style={ styles.image }/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => props.onLoaded("Carsten") } style={ styles.button }>
                    <Image source={{ uri: "./../../assets/Carsten.png" }} style={ styles.image} />
                </TouchableOpacity>
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
    buttonContainer: {
        flexDirection: 'row', 
        alignContent: 'center', 
        justifyContent: 'center',
        gap: 10
    },
    button: {
        flex: 2
    },
    text: {
        fontSize: 14,
        textAlign: "center",
        marginBottom: 10
    },
    image: { 
        width : 100, 
        height: 100 
    }
})