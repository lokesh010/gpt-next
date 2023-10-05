import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  const { chats } = req.body;
  const configuration = new Configuration({
    organization: "org-Jskx99nMa9ocGZULu5yb6U9f",
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const result = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are well versed in Bhagavad Gita Book. You will reply everything in context of Bhagvad Gita Book",
        },
        ...chats,
      ],
    })
    .catch((err) => {
      console.log(111, err);
    });

  console.log({ result });

  return res.json({
    output: result.data.choices[0].message,
  });
}
