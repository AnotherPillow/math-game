let questions = [
    // {
    //     "num1":4,
    //     "num2":10,
    //     "answer":40,
    //     "type":"X"
    // }
]

let oq;

let wrongCount = 0;
let rightCount = 0;

let answersDiv;
let questionDiv;

const gen_nums = (nums) => {
    
    answersDiv = document.getElementById('answers')
    questionDiv = document.getElementById('question_div')

    for (let i=0; i < nums; i++) {
        console.log(i)
        var n1 = Math.floor(Math.random() * 12) + 1;
        var n2 = Math.floor(Math.random() * 12) + 1;
        var ans = n1 * n2;
        var json = {
            num1:n1,
            num2:n2,
            answer:ans,
            type:'X'
        }
        questions.push(json)

        var b = document.createElement("button");
        b.id = "answer_btn_" + i;
        b.classList.add('firebrick_bg_colour')
        b.classList.add('firebrick_border_colour')
        b.classList.add('nopadding')
        b.classList.add('noborder')

        var b_div = document.createElement('div');
        b_div.id="answer_div_" + i;
        b_div.classList.add('b_div')

        
        var b_img = document.createElement("img");
        b_img.id="answer_img_" + i;
        b_img.src="img/idonotlikewin11mspaint.png";
        b_img.style.borderColor="firebrick";
        b_img.classList.add('b_img');
        b_img.setAttribute('onclick',`answered(${i}, ${ans}, [${n1},${n2}])`);
        b_div.appendChild(b_img)

        var b_text = document.createElement('p');
        b_text.id="answer_txt_" + 1
        b_text.innerHTML=ans;
        b_text.style.zIndex = "5"
        b_text.classList.add('b_div_text')
        b_div.appendChild(b_text)

        b.appendChild(b_div)

        answersDiv.appendChild(b)

    }
    console.log(questions)
}

const start = (state, nums) => {
    if (state === "href") {
        window.location.href = "game.html";
    }
    else if (state === "play") {
        document.body.style.backgroundColor="firebrick";
        gen_nums(nums);
        get_random_question()
        timer()
    }
}

const answered = (question, ans, nums) => {
    let answer;
    try {
        answer = questions[oq].answer
    } catch (e) {
        answer = ans;
    }
    console.log(question,answer,nums);
    
    if (answer == nums[0] * nums[1]) {
        var score = document.getElementById('score')
        var score_int = parseInt(score.innerHTML)

        score.innerHTML = (score_int + 1).toString()
        rightCount++
    } else {
        var score = document.getElementById('score')
        var score_int = parseInt(score.innerHTML)

        score.innerHTML = (score_int - 1).toString()
        wrongCount++
    }
    
    var nq = get_random_question();
    console.log(nq)
    oq = nq;
    
    
}
const get_random_question = () => {
    console.log("EEEEEEEEEEeee")
    var x = Math.floor(Math.random() * questions.length)
    var q = questions[x].num1 + " * " + questions[x].num2 + " ="

    questionDiv.innerHTML='<p class="q centre xxl" id="question">'+ q +'</p>';
    return x;
}
const go_main_page = () => {
    window.location.href="game.html"
}