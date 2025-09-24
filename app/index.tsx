import ButtonApp from "@/components/buttonApp";
import { styles } from "@/components/styles";
import SubTitleApp from "@/components/subTitleApp";
import TextInputApp from "@/components/textInputApp";
import TitleApp from "@/components/titleApp";
import ViewAnswer from "@/components/viewAnswer";
import { generateCuriousFact } from "@/services/ia/generator";
import React from "react";
import { Keyboard, View } from "react-native";

export default function Index() {

  //Estados
  const [tema, setTema] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePress = async () => {
      if (tema.length<=2) {
        alert('Por favor, informe um tema com mais de 2 caracteres.');
        return;
      }
      //Iniciar o carregamento
      setIsLoading(true);
      //Limpar a resposta anterior
      setAnswer('');
      //Gerar o fato curioso
      const result = await generateCuriousFact(tema);
      //Limpa o tema
      setTema('');
      //Exibir o resultado
      setAnswer(result || 'Não consegui gerar um fato curioso, tente novamente.');
      //Finalizar o carregamento
      setIsLoading(false);

      //Fechar o teclado
      Keyboard.dismiss();
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
        disabled={tema.length<=2} />
      {answer && <ViewAnswer answer={answer} />}
    </View>
  );
}
