import ButtonApp from "@/components/buttonApp";
import { styles } from "@/components/styles";
import SubTitleApp from "@/components/subTitleApp";
import TextInputApp from "@/components/textInputApp";
import TitleApp from "@/components/titleApp";
import ViewAnswer from "@/components/viewAnswer";
import { generateCuriousFact } from "@/services/ia/generator";
import React from "react";
import { View } from "react-native";

export default function Index() {

  const [tema, setTema] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePress = async () => {
      if(tema.length<=4) {
        alert('Por favor, informe um tema com mais de 4 caracteres.');
        return;
      }
      setIsLoading(true);
      setAnswer('');
      const result = await generateCuriousFact(tema);
      setTema('');
      setAnswer(result || 'Não consegui gerar um fato curioso, tente novamente.');
      setIsLoading(false);
  }

  return (
    <View style={styles.container}>
      <TitleApp title="Fato Curioso" />
      <SubTitleApp text="Descubra fatos curiosos!" />
      <SubTitleApp text="Informe um tema:" />
      <TextInputApp value={tema} onChangeText={setTema} />
      <ButtonApp 
        title={isLoading ? 'Gerando...' : 'Gerar Fato Curioso'}
        onPress={handlePress}
        disabled={tema.length<=4} />
      {answer && <ViewAnswer answer={answer} />}
    </View>
  );
}
