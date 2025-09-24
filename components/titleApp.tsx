import { styles } from "@/components/styles";
import { Text } from "react-native";

interface TitleAppProps {
    title: string;
}

const TitleApp = (props: TitleAppProps) => {
  return <Text style={styles.title}>{props.title}</Text>;
}

export default TitleApp;