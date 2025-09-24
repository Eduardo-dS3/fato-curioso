import { styles } from "@/components/styles";
import { Text, TouchableOpacity } from "react-native";

interface ButtonAppProps {
    title: string;
    onPress?: ()=>void;
    disabled?: boolean;
}

const ButtonApp = ({title, onPress, disabled}: ButtonAppProps) => {
    return <TouchableOpacity 
        style={disabled ? styles.buttonDisabled : styles.button}
        onPress={onPress}
        disabled={disabled}
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>;
}

export default ButtonApp;