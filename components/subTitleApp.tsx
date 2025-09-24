import { styles } from "@/components/styles";
import { Text } from "react-native";

interface SubTitleAppProps {
    text: string;
}

/**
 * Componente de subtítulo estilizado.
 * @param props Propriedades do componente.
 * @returns Componente de subtítulo estilizado.
 */
const SubTitleApp = (props: SubTitleAppProps) => {
    return <Text style={styles.subTitle}>{props.text}</Text>;
}

export default SubTitleApp;