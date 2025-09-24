import {
    GoogleGenAI,
} from '@google/genai';

export async function generateCuriousFact(theme: string) {
  const ai = new GoogleGenAI({
    apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: 0,
    },
    systemInstruction: [
        {
          text: `Você é uma fonte de conhecimento de fatos curiosos. Sua tarefa é fornecer fatos interessantes e concisos sobre um tema específico.
                
Responda o texto diretamente com o fato escolhido, sem qualquer introdução como "Aqui está um fato sobre..." ou conclusão.

Se o tema for muito amplo, escolha um sub-tópico interessante. Se o tema for inadequado ou impossível, responda com uma mensagem amigável como "Não consegui encontrar um fato curioso sobre esse tema, que tal tentarmos outro?".`,
        }
    ],
  };
  const model = 'gemini-2.5-flash-lite';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: theme,
        },
      ],
    },
  ];

    try
    {
        const response = await ai.models.generateContent({
            model,
            config,
            contents,
        });
    
        const result = response?.candidates?.[0]?.content?.parts?.[0]?.text;
        return result;
    }catch(error){
        return "Erro ao gerar o fato curioso. Por favor, tente novamente mais tarde.";
    }
}
