export const runtime = "experimental-edge";

if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error("Missing OpenAI API Key");
}

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
         
          {
            role: "user",
            content: `summarize "${prompt}"`,
          }
          
        ],        
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 200,
        stream: false,
        n: 1,
      }),
    });

    const json = await response.json();
    const choice = json.choices[0];
    const summary = `• ${choice.message.content}`; // Format the summary with a bullet point
    return new Response(summary);
  } catch (e) {
    return new Response("Request cannot be processed!", {
      status: 400,
    });
  }
}