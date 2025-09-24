import { styles } from "@/components/styles";
import { Text, View } from "react-native";

interface ViewAnswerProps {
    answer: string;
}

/**
 * Componente para exibir a resposta estilizada.
 * @param answer Texto da resposta a ser exibida.
 * @return Componente de exibição da resposta.
 */
const ViewAnswer = ({answer}:ViewAnswerProps) => {
    return <View style={styles.answerBox}>
        <Text style={styles.answerText}>{answer}</Text>
    </View>;
}

export default ViewAnswer;