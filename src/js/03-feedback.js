import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedbackFormState = JSON.parse(localStorage.getItem('feedbackFormState')) || {};

form.addEventListener('input', throttle(elemFormsInput, 500));

function elemFormsInput (event) {  
  feedbackFormState[event.target.name] = event.target.value;
  console.log(feedbackFormState);
  localStorage.setItem('feedbackFormState', JSON.stringify(feedbackFormState)); 
};

function outputMessage() {
  const savedMessage = JSON.parse(localStorage.getItem('feedbackFormState'));
  if (savedMessage) {    
    form.value = savedMessage;
    const { email, message } = form.elements;
    email.value = savedMessage.email || '';
    message.value = savedMessage.message || '';    
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

