import { styles } from "@/components/styles";
import { Text } from "react-native";

interface SubTitleAppProps {
    text: string;
}

const SubTitleApp = (props: SubTitleAppProps) => {
    return <Text style={styles.subTitle}>{props.text}</Text>;
}

export default SubTitleApp;