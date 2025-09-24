import { styles } from "@/components/styles";
import { Text } from "react-native";

interface TitleAppProps {
    title: string;
}

/**
 * Componente de título estilizado.
 * @param props Propriedades do componente.
 * @returns Componente de título estilizado.
 */
const TitleApp = (props: TitleAppProps) => {
  return <Text style={styles.title}>{props.title}</Text>;
}

export default TitleApp;