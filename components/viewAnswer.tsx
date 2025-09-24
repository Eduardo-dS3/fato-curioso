import { styles } from "@/components/styles";
import { Text, View } from "react-native";

interface ViewAnswerProps {
    answer: string;
}

const ViewAnswer = ({answer}:ViewAnswerProps) => {
    return <View style={styles.answerBox}>
        <Text style={styles.answerText}>{answer}</Text>
    </View>;
}

export default ViewAnswer;