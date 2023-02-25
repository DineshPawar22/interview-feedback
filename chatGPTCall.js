const callChatGPTApi = async (query , text)=>
{
    const apiKey = "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";
    const modelId = "text-davinci-003";
    const endpoint = "https://api.openai.com/v1/completions";

// Get the input text and create the request parameters
const propmt = query + text;
const params = {
  "model": modelId,
  "prompt": propmt,
  "temperature": 0.3,
    "max_tokens": 120,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
};

// Send the request to the OpenAI API using fetch()
const req =  await fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  },
  body: JSON.stringify(params),
})

const data = await req.json();
  return data;
  
}
