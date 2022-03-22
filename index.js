var quizData = [
    {
      id: 1,
      question: "Which was not one of the Voldemort Horcruxes?",
      name: 'one',
      choice1: 'Harry',
      choice2: 'Nagini',
      choice3: "Helga's Diadem",
      choice4: "Tom Riddle Diary",
      answer: 'Tom Riddle Diary',
    },
    {
      id: 2,
      question: "Which of these are not one of Hagrid's many pets??",
      name: 'two',
      choice1: 'Grawp',
      choice2: 'Fluffy',
      choice3: 'Aragog',
      choice4: 'Noberta',
      answer: 'Noberta',
    },
    {
      id: 3,
      question: "Which class did Severus Snape always want to teach?",
      choice1: 'Potions',
      choice2: 'Charms',
      choice3: 'Transfiguration',
      choice4: 'Defence Against Dark Arts',
      answer: 'Defence Against Dark Arts',
    },
    {
      id: 4,
      question: "Which Hogwarts house did Moaning Myrtle belong in?",
      name: 'four',
      choice1: 'Gryffindor',
      choice2: 'Ravenclaw',
      choice3: 'Slytherin',
      choice4: 'Hufflepuff',
      answer: 'Ravenclaw',
    },
    {
      id: 5,
      question: "What class did Neville end up teaching at Hogwarts?",
      name: 'five',
      choice1: 'Herbology',
      choice2: 'Astronomy',
      choice3: 'Charms',
      choice4: 'Muggle Studies',
      answer: 'Herbology',
    },
  ];
  
  var form = document.getElementById('quizForm');
  
  for (let i = 0; i < 5; i++) {
    createQuestion(i);
  }
  
  function createQuestion(id) {
    var question = document.getElementById('question');
    var questionName = document.createElement('p');
    var counter = id + 1;
    questionName.innerHTML += 'Q' + counter + '.';
    questionName.innerHTML += quizData[id].question;
    question.appendChild(questionName);
    callAddChoice(id);
    question.innerHTML += '<hr>';
    form.appendChild(question);
  }
  
  function callAddChoice(id) {
    addChoice(quizData[id].name, quizData[id].choice1, quizData[id].choice1);
    addChoice(quizData[id].name, quizData[id].choice2, quizData[id].choice2);
    addChoice(quizData[id].name, quizData[id].choice3, quizData[id].choice3);
    addChoice(quizData[id].name, quizData[id].choice4, quizData[id].choice4);
  }
  
  function addChoice(name, value, text) {
    var question = document.getElementById('question');
    var label = document.createElement('label');
    var element = document.createElement('input');
    element.setAttribute('type', 'radio');
    element.setAttribute('value', value);
    element.setAttribute('name', name);
    label.appendChild(element);
    label.innerHTML += ' ' + '   ' + text;
    label.innerHTML += '<br>';
    question.appendChild(label);
  }
  var checkedAnswers = [];
  var submitButtonWrapper = document.createElement('div');
  submitButtonWrapper.id = 'submit-button-wrapper';
  var submit = document.createElement('button');
  submit.type = 'submit';
  submit.innerHTML = 'Submit';
  submit.id = 'submit';
  submitButtonWrapper.appendChild(submit);
  form.appendChild(submitButtonWrapper);
  
  submit.onclick = function (e) {
    e.preventDefault();
    for (let i = 0; i < 5; i++) {
      var val = getRadioVal(form, quizData[i].name);
      checkedAnswers[i] = val;
    }
  
    var counter = 0;
    for (let i = 0; i < checkedAnswers.length; i++) {
      if (checkedAnswers[i] == quizData[i].answer) {
        counter++;
      }
    }
    document.getElementById('score').innerHTML = counter + '/5';
  };
  
  function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name];
    for (var i = 0, len = radios.length; i < len; i++) {
      if (radios[i].checked) {
        val = radios[i].value;
        break;
      }
    }
    return val;
  }
  