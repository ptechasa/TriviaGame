var questions = [
    {
        question: "1. What is the term for a fix, known as software problem?",
        choices: [
            "A. Skiff",
            "B. Patch",
            "C. Slipstream",
            "D. Upgrade",
        ],
        answer: "B. A patch is a fix for a known software problem."
    },
    {
        question: "2. Which of the following programming interface that allows a remote computer to run programs on a local machine?",
        choices: [
            "A. SSL",
            "B. RSH",
            "C. SSH",
            "D. RPC"
        ],
        answer: "D. RPC (Remote Procedure Call) is a programming interface that allows a remote computer to run programs on a local machine."
    },
    {
        question: "3. How many bits are used for addressing with IPv4 and IPv6, respectively? ",
        choices: [
            "A. 32, 128",
            "B. 16, 64",
            "C. 8, 32",
            "D. 4, 16",
        ],
        answer: "A. IPv4 uses 32 bits for the host address, whereas IPv6 uses 128 bits for this."
    },
    {
        question: "4. Which of the following is a method of capturing a virtual machine at a given point in time? ",
        choices: [
            "A. Photograph",
            "B. Snapshot",
            "C. Syslog",
            "D. WMI",
        ],
        answer: "B. Snapshot is a method of capturing a virtual machine at a given point in time."
    },
    {
        question: "5. Which of the following is the highest classification level in the government? ",
        choices: [
            "A. Secret",
            "B. Confidential",
            "C. Top Secret",
            "D.  Classified",
        ],
        answer: "C. Top Secret"
    },

];


var counter = 60;
$('#timerGoDown').text(counter)

var timer = setInterval(setTimer, 1 * 1000)

//set timer for limited amount of time to finish the quiz. 
function setTimer() {
    counter--;
    $('#timerGoDown').text(counter);
    console.log(setTimer)

    if (counter == 0) {
        $('#timerGoDown').text('Time is up')
        clearInterval(timer)
    }

    //Prevent the page form refreshing
    event.preventDefault();
}
// console.log(questions[0])
// console.log(questions[1])
for (var i = 0; i < questions.length; i++) {
    var divg = $('<div>').addClass("form-group")

    var question = questions[i]
    // console.log(question)
    console.log(question.question)
    divg.append($('<p>').text(question.question))
    // console.log(question.choices[0])
    // console.log(question.choices[1])

    for (var x = 0; x < question.choices.length; x++) {
        var choice = question.choices[x]
        // console.log(question.choices[x])
        var div = $('<div>').attr("class", "form-check")
        var radio = $('<input>').attr("type", "radio").attr("class", "form-check-input").attr("name", "question" + i).attr("id", "question" + i + x)
        var label = $('<label>').text(choice).attr("class", "form-check-label").attr("for", "question" + i + x)

        div.append(radio, label)
        divg.append(div)
    }
    $('form').append(divg)
}
var button = $('<button>')

/*
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
*/