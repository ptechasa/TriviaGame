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
    },
    {
        question: "6. What is the default port for Telnet? ",
        choices: [
            "A. 25",
            "B. 22",
            "C. 80",
            "D. 23",
        ],
        answer: 3,
    },
];

//set timer for limited amount of time 90 second
var counter = 91;
var timer; // var timer = undefined;
// var timer = setInterval(decreaseCounter, 1 * 1000)

// display initial time countdown
function decreaseCounter() {
    counter--;
    $('.timeGoDown').text('Time remaining: ' + counter);
    // $('form').show()

    //The game ends when the time runs out, and the result will display
    if (counter == 0) {
        $('.timeGoDown').text('Time is up!')
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

        for (var x = 0; x < question.choices.length; x++) {
            var choice = question.choices[x]
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

        //Form will be hide first
        $('form').hide()
    }

    //create a button to submit
    var btn = $('<button>').text("SUBMIT")
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

        //convert string into a number
        var result = parseInt($(`input[name='question${q}']:checked`).val())

        //if player's answer match with the answers in the question lists, correct scrore will be increase
        if (result === questions[q].answer) {
            totalCorrectAnswer++
        }
    }
    return totalCorrectAnswer;
}

//result of correct answer and incorrect answer
function showResults() {
    var correctAns = checkAnswer()

    //hide form
    $('form').hide()

    //then display only results
    $('.results').show()

    //Total correct answer 
    $('.correctAnswer').text(correctAns)

    //Total incorrect answer
    $('.incorrectAnswer').text(questions.length - correctAns)
    console.log(correctAns)
    console.log(questions.length - correctAns)

    //display text when time runs out
    $('.timeGoDown').text('All Done!')

    //clear timer
    // if (timer == undefined){
    // }else {
    //     clearInterval(timer)
    // }

    if (timer != undefined) {
        clearInterval(timer)
        timer = undefined
    }

}

//when click on the button, it will show total correct answer and incorrect answer
$(document).on('click', 'button', function () {

    //Prevent the page from refreshing
    event.preventDefault();
    // showResults();

    console.log('hit')
    console.log(this)
    console.log($(this).attr('id'))

    // if ($(this).attr('id') === "start") {
    // }

    var btn = $(this).attr('id')
    if (btn === "start") {
        console.log('hey!')

        if (timer === undefined) {
            timer = setInterval(decreaseCounter, 1 * 1000)

            //Once click 'start' button, it will remove start button from the page
            $("#start").remove();

            //Form will show when you click 'start' button
            $('form').show()
        }

    } else {
        console.log('sorry')
        showResults();
    }
});

render()

// review
// if else, else if
// function

//add two more function 
// one- clear time interval
//second- start timing