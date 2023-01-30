import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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"
});
const openAi = new OpenAIApi(configuration);

let historyConversation = ""

const makeQuestion = async (question) => {
    return openAi.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        temperature: 1,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["-"],
      });
} 

export const ChatAI =async (question) => {
    const sendQuestion = `${historyConversation}-Q:${question}-A:`
    const response = await makeQuestion(sendQuestion)
    const {text} = response.data.choices[0]
    historyConversation = `${sendQuestion}${text}`
    return text
};
