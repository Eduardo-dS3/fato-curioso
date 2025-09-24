import { styles } from "@/components/styles";
import { TextInput } from "react-native";

interface TextInputAppProps {
    value?: string;
    onChangeText?: (text: string) => void;
}

const TextInputApp = ({value, onChangeText}: TextInputAppProps) => {
    return <TextInput 
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput} 
        placeholder="Digite aqui..." />;
}

export default TextInputApp;