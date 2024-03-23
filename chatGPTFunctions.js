/**
 * chatGPTFunctions provides the functionality for the chatgpt interaction
 * in a contained sandbox implementation to be loaded in whenever necessary to
 * the relevant HTML pages.
 * 
 * @author Tyler Hostager
 * @version 1.0.0b1
 * 
 * @see "lesson-plan.html" for implementation
 */

// init global defaults
const CONNECT = "CONNECT";
const CONNECTION_DEFAULT = `keep-alive`;
const DEFAULT_PORT = 443;
const API_HTTP_VERSION = `HTTP/1.1`

/**********************************************************************
* connect to the initial chatGPT server to perform the SSL handshake
**********************************************************************/
// initial handshake variables  API - initial config/web request vars
const CHATGPT_HOST_URL = "ab.chatgpt.com"
const CHATGPT_REQUEST_PORT = 443;
const CHATGPT_REQUEST_URL = new URL(`${CHATGPT_HOST_URL}:${CHATGPT_REQUEST_PORT}`); // should be 'ab.chatgpt.com:443' to open the connection

/**********************************************
* connect to the chat client itself
**********************************************/
// configure request headers
const CHATGPT_CHAT_HOST_URL = "chat.openai.com";
const CHATGPT_CHAT_REQUEST_PORT = 443;
const CHATGPT_CHAT_REQUEST_URL = new URL(`${CHATGPT_CHAT_HOST_URL}:${CHATGPT_CHAT_REQUEST_PORT}`);
const CHATGPT_CHAT_REQUEST_METHOD = CONNECT;
const CHATGPT_CHAT_REMOTE_ADDRESS = `2606:4700:4400::ac40:961c:${CHATGPT_CHAT_REQUEST_PORT ?? DEFAULT_PORT}`;


let initHandshakeFunc = (() => {
    var tmp = "";



    return tmp ?? "empty";
})();


/***********************************************
 * setup header values for chatgpt values
 **********************************************/
let chat_Host = `${CHATGPT_CHAT_HOST_URL ?? `chat.openai.com`}`;
let chat_RequestURL = new URL((`${CHATGPT_CHAT_HOST_URL}:${CHATGPT_CHAT_REQUEST_PORT}}`) ?? `chat.openai.com:443`);
let chat_ProxyConnection = CONNECTION_DEFAULT ?? `keep-alive`;
let chat_Connection = CONNECTION_DEFAULT ?? `keep-alive`;

//gradeLevelDiv = document.getElementById('grades');

var tmp = document.getElementById(`ai-form`);
if (tmp) {
    alert(tmp);
    window.alert(tmp);
}
alert("TMP: " + tmp);

/*
const testSubmit = async () => { 
    
    const formElement form?:(HTMLFormElement|nul)  => { HTMLFormElement in (_)
        //_.topic
    } (document.getElementById("ai-form")); //document.querySelectorAll(`ai-form`);
    alert("TESSSST:" + formElement);
    const formData = new FormData(formElement,
       document.getRootNode().firstChild.parentElement);
    await formAction(formData);
}
*/

//alert(testSubmit(document.getElementById('ai-form')));
testSubmit((_) => {
    alert("here's the fancy new payload uwu");

})

/*

subjectTxtDiv = (elems? _:[TMLElement], form? _:(HTMLFormElemen|null)) => { HTMLElement in    //document.getRootNode().parentElement.getElementById('subject-input')) = (HTMLElement)) => { HTMLElement in
    if (elems) {
     //= (HTMLFormElement) (document.getElementById('subject-input'));
    };
    // (document.getElementById('subject-input'))}//) 
})
*/


//lessonTopicDiv = (HTMLFormElement)(document.getElementById('lesson-input'));
/*
const t1 = (HTMLFormElement)(document.querySelectorAll(`ai-form`)[0]);
var i=0;
for (tmp?: a  HTMLFormElement|null in t1.values) {
    console.log(a.toString());
    i++;
    alert(`Form #${i}: \'${a}\'`);


    console.log(`a: \'${a}\', tmp: \'${tmp}\'`);
}
*/

// const formEl = ((HTMLFormElement)(document.querySelectorAll(`ai-form`)));
// alert(formEl.toString());

let w = (document.querySelectorAll(`ai-form`)[0]);
//let w = (HTMLFormElement)(document.querySelectorAll(`ai-form`)[0]);

/*
let w_all = document.querySelectorAll(`ai-form`);
alert(w_all);


const handleSubmitForm = async () => { 
    const formElem  = (HTMLFormElement|null)((w_all[0]), undefined);
    const formData = new FormData((formElem|undefined), document.getRootNode().parentElement);
    //const formData = new FormData(formElement || undefined, first || undefined);
    await formAction(formData);
}

let arrg = this.handleSubmitForm(w);
*/


//alert(`ARRRG: ${arrg}`);



// for (b? static:HTMLFormElement|null in first) {
//     if (static (w)) {
//         alert(`B: ${b}`);
//     }
// }



//let form = document.querySelector(`ai-form`);
//console.log(`Form: ${form}`);
//alert(`\nFORM!!!\n\n${form.innerText}`);


let subjectTxtDiv = document.getElementById('subject-input');
console.log(`-- SUBJECT: ${subjectTxtDiv}`);

let lessonTopicDiv =  document.getElementById('lesson-input');

let gradeLevelDiv = document.getElementById('grades') ; //document.CDATA_SECTION_NODE.valueOf(0);


alert("TEST GRADE LEVEL: " + this.gradeLevelDiv + "");

//let gradeLevelDiv = document.getElementById("grades");
//let subjectTxtDiv = document.getElementById('subject-input');
//let lessonTopicDiv = document.getElementById('lesson-input');



let gradeLevl = 0;      // default
let subject = 'history';
let lessonPlan = 'The war of 1812';



/**
 * automatically executes upon being loaded as a resource
 */
(() => {
    var tmpGrade = 3;
    var subjectTxtDiv = document.getElementById('subject-input');
    var lessonTopicDiv = document.getElementById('lesson-input');

    //gradeLevelDiv = document.getElementById("grades") instanceof HTMLSelectElement;


    //console.log(`GRADE LEVEL DIV:> ${gradeLevelDiv}`);
    
    //this.gradeLevelDiv = (HTMLElement)(document.getElementById('grades'));
    //gradeLevelDiv = document.getElementById("grades");

    //alert(`GRADE: ${gradeLevelDiv.value}`);
    //alert(`GRADE: ${gradeLevelDiv.value}`);
    //document.getElementById('grades');
    this.subjectTxtDiv = subjectTxtDiv ?? (document.getElementById('subject-input') instanceof HTMLFormElement) ? document.getElementById('subject-input') : "";
    this.lessonTopicDiv = lessonTopicDiv ?? (document.getElementById('lesson-input') instanceof HTMLFormElement) ? document.getElementById('lesson-input') : "";
    //alert(document.getElementById('subject-input'));

    //gradeLevelDiv = 0;

    this.subjectTxtDiv.placeholder = subject;
    this.lessonTopicDiv.placeholder = lessonPlan;
    this.form = document.getElementById('ai-form');
 
    //for (var i = 0; i < CHATGPT_CHAT_REQUEST_URL)

    //alert(document.getElementById('subject-input').innerText.toString());
    //alert("TEST");


    
})();



function makeURLForGPT(grade, subject, topic) { //Boolean in (formElem (HTMLFormElement))
    
    this.form = form = (HTMLFormElement)(document.getElementById('ai-form'));

    console.log("TYYYYYTEST\n\nFORM TIME: " + this.form.value.toString()); //+ this.gradeLevelDiv.value.toString());

    //alert(`YEEEEHAW\n${grade.value}\n${subject.value}\n${topic.value}`);
    this.gradeLevl = grade;
    this.subject = subject.value;
    this.lessonPlan = topic.value;
    alert(`YEEEEHAW\n${this.gradeLevl}\n${this.subject.value.toString()}\n${topic.value.toString()}`);
    //alert(`YEEEEHAW\n${gradeLevl.value}\n${subject.value}\n${topic.value}`);

    //this.setupChatGPT();

    alert(`${CHATGPT_CHAT_REQUEST_URL}:${CHATGPT_CHAT_REQUEST_PORT}/${String(this.gradeLevl)}`);

    class CustomURL extends Object {
        static DEFAULT_GRADE=0;
        static DEFAULT_SUBJECT="science";
        static DEFAULT_LESSON="chemical equations";

        grade="";
        subject="";
        lessonPlan="";

        init() {
            constructor(CustomURL.DEFAULT_GRADE, CustomURL.DEFAULT_SUBJECT, CustomURL.DEFAULT_LESSON);
        }
        
        /*
        constructor() {
            this.grade = CustomURL.DEFAULT_GRADE;
            this.subject = CustomURL.DEFAULT_SUBJECT.toString();
            this.lessonPlan = CustomURL.DEFAULT_LESSON.toString();


            //CustomURL(CustomURL.DEFAULT_GRADE, CustomURL.DEFAULT_SUBJECT, CustomURL.DEFAULT_LESSON);
        }
        */

        
        constructor(newGrade, newSubj, newLesson) {
            this.grade = newGrade ?? this.grade ?? CustomURL.DEFAULT_GRADE;
            this.subject = newSubj ?? this.subject ?? CustomURL.DEFAULT_SUBJECT.toString();
            this.lessonPlan = newLesson ?? this.lessonPlan ?? CustomURL.DEFAULT_LESSON.toString();
        }
        

        toString() {
            return `Grade:\u0020${this.grade.toString()}\n${this.subject.toString()}\n${this.lessonPlan.toString()}`;
        }
    }


    

    //var CustomURLVar = new CustomURL();
    var CustomURLVar = ((_) => CustomURL in {    
        grade : 7,
        subject: "math",
        lessonPlan: "testing123"
    });
    

    alert(`CustomURLVAR:\n${CustomURLVar}`);

    this.grade = CustomURLVar.grade;
    this.subject = CustomURLVar.subject;
    this.lessonPlan = CustomURLVar.lessonPlan;

    
    alert(`Grade:\u0200\'${this.grade}\'\nSubject\u0200\'${this.subject}\'\nLesson\u0200Topic:\u0200${this.lessonPlan}`);
    //alert(`Grade:\u0200\'${this.grade}\'\nSubject\u0200\'${this.subject.toString()}\'\nLesson\u0200Topic:\u0200${this.lessonPlan.toString()}`);

    //return CustomURLVar;

    return CustomURLVar;
}

/**
 * 
 */
function setupChatGPT() {
    /*
    let gradeLevelDiv = document.getElementById("grades");
    let subjectTxtDiv = document.getElementById('subject-input');
    let lessonTopicDiv = document.getElementById('lesson-input');
    */

    //gradeLevelDiv = (HTMLElement)(document.getElementById("grades"));
    //this.subjectTxtDiv = (HTMLFormElement)(document.getElementById('subject-input'));
    //this.lessonTopicDiv = (HTMLFormElement)(document.getElementById('lesson-input'));
    


    // this.subjectTxtDiv.placeholder = 'Astrology';
    // this.lessonTopicDiv.placeholder = 'Signs in space';


    var requestURL = CHATGPT_REQUEST_URL;

    console.log(`Subject: ${subjectTxtDiv.value.toString() ?? subjectTxtDiv.placeholder}`);
    console.log(`Lesson topic: ${lessonTopicDiv.value.toString() ?? lessonTopicDiv.placeholder}`);

    this.gradeLevl = gradeLevelDiv.value ?? gradeLevl ?? -1;
    this.subject = subjectTxtDiv.value.toString() ?? subject ?? "Art";
    this.lessonPlan = lessonTopicDiv.value.toString() ?? lessonPlan ?? "Basket weaving";
    
    //this.gradeLevl = gradeLevl;
    //this.subject = subject;     //document.getElementById('subject-input').value;
    //this.lessonPlan = lessonPlan;

    console.log("\n");
    console.log(`>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<`);
    console.log(`>>>  LOADED VALUES FROM MEMORY  <<<`);
    console.log(`>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<`);
    console.log(`- Grade level: ${this.gradeLevl ?? this.gradeLevelDiv.value}`);
    console.log(`- Subject: ${this.subject ?? this.subjectTxtDiv.placeholder ??  CustomURL.subject}`);
    console.log(`- Lesson topic: ${this.lessonPlan ?? this.lessonTopicDiv.placeholder ?? CustomURL.lessonPlan}`);
    console.log(`>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<`);
    console.log("\n");

    //console.log("Lesson input: " + document.getElementById('lesson-input'));

    
    let lessonTopic = document.getElementById('lesson-input').value.toString() ??  document.getElementById('lesson-input').placeholder.toString();
    //alert();
    //alert(`Lesson topic: \"${lessonTopic}\"`);


    //var body = $(document).getElemenmtById("body");
    //var body = document.getElementById("body");

    
    alert(`Request URL: ${requestURL}`);
    //alert(document.getElementById('subject-input').innerText.toString());

    //var success = makeURLForGPT(gradeLevl, subject, lessonPlan);
    //if (success) {

    //}

    alert("Successful: \'" + success+"\'\n\nGrade level: \'" 
    + gradeLevl+"\'\nSubject: \'"+subject+"\'\nLesson plan:"+lessonPlan+"\'");
}