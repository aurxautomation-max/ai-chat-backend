import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req,res)=>{

  const {message, personality} = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {role:"system", content: personality},
      {role:"user", content: message}
    ]
  });

  res.json({
    reply: response.choices[0].message.content
  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`AI server running on port ${PORT}`);
});
