/**
 * gpt-3.5  functionality anywherer from any script that calls it
 * 
 * @author Tyler Hostager
 * @version 1.0.0b1
 */


const userAction = async () => {
    const input = "" + document.forms["input"]["topic-input"].value;
    const grade = "" + document.forms["input"]["grades"].value;
    const reply = "" + document.forms["input"]["reply"].value;
    const promptStr  = `Create a lesson plan for learning about ${input} in a ${grade} classroom, with project or homework options for visual, auditory, reading, and kinesthetic learners.`
    const reponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: "POST",
        body: JSON.stringify({
            "model": "gpt-3.5-turbo", 
            "messages": [{
                    "role":"assistant",
                    "content": reply
                }, {
                    "role":"user",
                    "content": promptStr
                }
            ]}),
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer sk-proj-7KiQQPfIxqLnQY8EM8sDT3BlbkFJiwEctttcio0zTsukNJkP",
        }
    }).then((response) => {
        if (response.ok) {
            response.json().then((json) => {
                const AnswerLog = [
                    document.getElementById("output").innerHTML,
                    "<br><br>Lesson Topic: ", input,
                    "<br><br>Lesson Plan: ", json.choices[0].message.content
                ];

                document.forms["input"]["topic-input"].value = "";
                document.getElementById("output").innerHTML = AnswerLog.join("");
                document.forms["input"]["reply"].value = json.choices[0].message.content;
            });
        }
    });
}

async function generateResults() {			
    console.log(">  Generating chatGPT results...");			
    alert("Generating output with the given pompts.\nthis may take a few moments...");
    console.log("> Updated  prompt: " + document.URL.toString());
}