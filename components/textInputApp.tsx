import { styles } from "@/components/styles";
import { TextInput } from "react-native";

interface TextInputAppProps {
    value?: string;
    onChangeText?: (text: string) => void;
}

/**
 * Componente de entrada de texto estilizado.
 * @param value Valor atual do texto.
 * @param onChangeText Função chamada quando o texto é alterado.
 * @return Componente de entrada de texto estilizado. 
 */
const TextInputApp = ({value, onChangeText}: TextInputAppProps) => {
    return <TextInput 
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput} 
        placeholder="Digite aqui..." />;
}

export default TextInputApp;