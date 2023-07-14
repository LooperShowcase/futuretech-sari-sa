//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

let ai_responce;
let chat=[
    {role: "user",content:"hi"},
    {role:"assistant",content:"hi,how can i help you today" }
]
 async function chatuseradd(feeling,qustion){
    chat.push({role: "user",content:"my happines from 1-10" + feeling  +  "my input is:" + qustion});
}
  async function chatassistantadd(res){
  chat.push({role:"assitant",content: res});
 }
async function openai_test()
{
    let url="https://api.openai.com/v1/chat/completions";

    let part1 = "sk";
    let part2 = "-LLDtZIQbt300rIyi";
    let part3 = "Bm5LT3BlbkFJwntYQJzMl3xlkgLt63pM";

let apikey= part1+part2+part3;
  
    let data={
        model: "gpt-3.5-turbo",
        messages: chat
    }
    try {
         const response= await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${apikey}` 
            },
            body:JSON.stringify(data)
         })

         if(response.ok){
            const responsedata = await response.json();
            const message = responsedata.choices[0].message.content;
    
            chatassistantadd(message);
            const speech =new SpeechSynthesisUtterance(message);
            speechSynthesis.speak(speech);
            return message;
        
        }  
    }catch  (error) {
        console.log("opps you have an error"+error) 
    

    }
}