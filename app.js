const input = document.querySelector('input');

const askBtn = document.querySelector('#ask');

const answerArr = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

let question = document.createElement('div');
question.id = 'question';
document.body.appendChild(question);

let answer = document.createElement('div');
answer.id = 'answer';
document.body.appendChild(answer);

input.setAttribute('style', 'margin-top:5px');
question.setAttribute('style', 'margin-top:10px');
answer.setAttribute('style', 'margin-top:10px');

askBtn.addEventListener('click', function() {
    if(input.value === "" || input.value === null || input.value === undefined) {
        alert("Please enter in a question!");
    }
    else {
        const generateIndex = Math.floor(Math.random() * answerArr.length);
        question.innerHTML = '<em>Question</em>: ' + input.value;
        answer.innerHTML = '<em>Answer</em>: ' + answerArr[generateIndex];
        input.value = "";
    }
});


