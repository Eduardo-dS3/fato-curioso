import { styles } from "@/components/styles";
import { Text, TouchableOpacity } from "react-native";

interface ButtonAppProps {
    title: string;
    onPress?: ()=>void;
    disabled?: boolean;
}

/**
 * Botão customizado com estilos aplicados.
 * 
 * @param title Texto exibido no botão.
 * @param onPress Função chamada ao pressionar o botão.
 * @param disabled Indica se o botão está desabilitado.
 * @return Componente de botão estilizado.
 */
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