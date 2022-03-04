
// Get Advice Button
const adviceBtn = document.getElementById('get-advice-btn');
// Advice number
const adviceNumber = document.getElementById('advice-number');
// Advice content
const adviceContent = document.getElementById('advice-content');


// Adviceslip URL
const adviceUrl = "https://api.adviceslip.com/advice";


// Async Funtion to fetch data from API
async function getAdviceData() {
  const response = await fetch(adviceUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    adviceNumber.textContent = data.slip.id;
    adviceContent.textContent = data.slip.advice;
  })
  .catch(err => {
    console.log(err);
  });
}


// Event Listener to Call Function
adviceBtn.addEventListener('click', () => getAdviceData(), false);


// Call Function to Load Inital Data
getAdviceData();



