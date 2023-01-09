import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedbackFormState  =  {};

form.addEventListener('input', throttle (elemFormsInput, 500));

function elemFormsInput (event) {  
  feedbackFormState[event.target.name] = event.target.value;
  console.log(feedbackFormState);
  localStorage.setItem('feedbackFormState', JSON.stringify(feedbackFormState)); 
};

function outputMessage() {
  const savedMessage = localStorage.getItem('feedbackFormState');
  if (savedMessage) {
    // console.log(savedMessage);
    form.value = savedMessage;
    console.log(form.value)
    const parsedSettings = JSON.parse(savedMessage);
    console.log(parsedSettings);
  };  
};
outputMessage();

form.addEventListener('submit', formSubmit);

function formSubmit (event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedbackFormState');  
  console.log(feedbackFormState);
};

