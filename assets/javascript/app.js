//Question lists
var questions = [
    {
        question: "1. What is the term for a fix, known as software problem?",
        choices: [
            "A. Skiff",
            "B. Patch",
            "C. Slipstream",
            "D. Upgrade",
        ],
        answer: 1,
        // answer: "B. A patch is a fix for a known software problem."
    },
    {
        question: "2. Which of the following programming interface that allows a remote computer to run programs on a local machine?",
        choices: [
            "A. SSL",
            "B. RSH",
            "C. SSH",
            "D. RPC"
        ],
        answer: 3,
        // answer: "D. RPC (Remote Procedure Call) is a programming interface that allows a remote computer to run programs on a local machine."
    },
    {
        question: "3. How many bits are used for addressing with IPv4 and IPv6, respectively? ",
        choices: [
            "A. 32, 128",
            "B. 16, 64",
            "C. 8, 32",
            "D. 4, 16",
        ],
        answer: 0,
        //     answer: "A. IPv4 uses 32 bits for the host address, whereas IPv6 uses 128 bits for this."
    },
    {
        question: "4. Which of the following is a method of capturing a virtual machine at a given point in time? ",
        choices: [
            "A. Photograph",
            "B. Snapshot",
            "C. Syslog",
            "D. WMI",
        ],
        answer: 1,
        //     answer: "B. Snapshot is a method of capturing a virtual machine at a given point in time."
    },
    {
        question: "5. Which of the following is the highest classification level in the government? ",
        choices: [
            "A. Secret",
            "B. Confidential",
            "C. Top Secret",
            "D.  Classified",
        ],
        answer: 2,
        // answer: "C. Top Secret"
    },

];

//set timer for limited amount of time 120 second
var counter = 120;
var timer = setInterval(decreaseCounter, 1 * 1000)

//display initial time countdown
function decreaseCounter() {
    counter--;

    $('.timerGoDown').text(counter);

    if (counter == 0) {
        $('.timerGoDown').text('Time is up!')

        clearInterval(timer)
        showResults();
    }

}

function render() {

    //create a trivial game form with 4 multiple choices
    for (var i = 0; i < questions.length; i++) {
        var divTag = $('<div>').addClass("form-group")

        var question = questions[i]
        console.log(question.question)
        divTag.append($('<p>').text(question.question))
        // console.log(question.choices[0])
        // console.log(question.choices[1])

        for (var x = 0; x < question.choices.length; x++) {
            var choice = question.choices[x]
            // console.log(question.choices[x])
            var div = $('<div>').attr("class", "form-check")
            var radio = $('<input>')
                .attr("type", "radio")
                .attr("class", "form-check-input")
                .attr("name", "question" + i)
                .attr("id", "question" + i + x)
                .attr("value", x)
            var label = $('<label>').text(choice)
                .attr("class", "form-check-label")
                .attr("for", "question" + i + x)

            div.append(radio, label)
            divTag.append(div)
        }
        $('form').append(divTag)
    }

    //create a button to submit
    var btn = $('<button>').text("Done")
    $('form').append(btn)
}

function checkAnswer() {
    /*
        var q1 = $("input[name='question0']:checked").val()
        var q2 = $("input[name='question1']:checked").val()
             ^                          ^
    */

    var totalCorrectAnswer = 0;
    for (var q = 0; q < questions.length; q++) {
        //$("input[name='question"+q+"']:checked").val()
        //$(`input[name='question ${q}']:checked`).val()
        var result = parseInt($(`input[name='question${q}']:checked`).val())

        if (result === questions[q].answer) {
            totalCorrectAnswer++
        }
    }
    return totalCorrectAnswer;
}

function showResults() {
    var correctAns = checkAnswer()
    $('form').hide()
    $('.results').show()
    $('.correctAnswer').text(correctAns)
    $('.incorrectAnswer').text(questions.length - correctAns)
    console.log(correctAns)
    console.log(questions.length - correctAns)

    $('.timerGoDown').text('All Done!')
    clearInterval(timer)
}

//$('button').on('click', function(){
// $('form').submit(function () {
$(document).on('click', 'button', function () {
    event.preventDefault(); //Prevent the page from refreshing
    showResults();
});

render()


