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
    // {
    //     question: "5. Which of the following is the highest classification level in the government? ",
    //     choices: [
    //         "A. Secret",
    //         "B. Confidential",
    //         "C. Top Secret",
    //         "D.  Classified",
    //     ],
    //     answer: 2,
    //     // answer: "C. Top Secret"
    // },

];

// //set timer for limited amount of time 60 second
// var counter = 60;
// var timer = setInterval(decreaseCounter, 1 * 1000)

// $('#timerGoDown').text(counter)
// $('#timer').prepend("Time Remaining:")

// counterdown timer
// function decreaseCounter() {
//     counter--;

//     $('#timerGoDown').text(counter);
//     console.log(decreaseCounter)

//     if (counter == 0) {
//         $('#timerGoDown').text('Time is up!')
//         clearInterval(timer)
//     }

// }

// console.log(questions[0])
// console.log(questions[1])

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

    
    var btn = $('<button>').text("Done")
    $('form').append(btn)
}

//$('button').on('click', function(){
$(document).on('click', 'button', function () {
    //Prevent the page from refreshing
    event.preventDefault()

    /*
        var q1 = $("input[name='question0']:checked").val()
        var q2 = $("input[name='question1']:checked").val()
             ^                          ^
    */
    var ans = [];
    var correct = 0;
    var incorrect = 0;

    for (var q = 0; q < questions.length; q++) {
        //$("input[name='question"+q+"']:checked").val()
        //$(`input[name='question ${q}']:checked`).val()
        var result = parseInt($(`input[name='question${q}']:checked`).val())
        ans.push(result)

        if (result === questions[q].answer) {
            correct++
            console.log('Correct')
        } else {
            incorrect++
            $(incorrect).append('p')
            console.log('Incorrect, Please try again!!')
        }

    }
    // console.log(count)
})

// $(document).on('submit', function () {
//     event.preventDefault()
//     console.log('lol')
// })

render()
//     // var ans = question[].answer;
//     var getAnswer = $("input[name='question' + i]:checked").val();
//     console.log(questions[0].answer)
    // console.log(questions[1].answer)
    // console.log(questions[2].answer)
    // console.log(questions[3].answer)
    // console.log(questions[4].answer)

    //  if (result == answer){
    //      $('#content').text('Correct!!');
    //  }else {
    //     $('#content').text('Incorrect, Please try again!!');
    //  }

    //  //Prevent the page from refreshing
    //  event.preventDefault();

    // The page will reveal the number of questions that players answer correctly and incorrectly.

/*
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
*/