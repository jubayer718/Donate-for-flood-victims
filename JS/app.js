



document.getElementById('donate-btn-1').addEventListener('click', function () {
  



  const inputValue = parseFloat(document.getElementById('input-field').value);
  const addBallance = parseFloat(document.getElementById('donate-total').innerText);
  if (inputValue <= 0 || isNaN(inputValue)) {

    alert('faild to donate.Please try again.')
    return;
  }
  const newBallance = inputValue + addBallance;
  // decrease main ballance
    const mainBallance = parseFloat(document.getElementById('main-ballance').innerText);
  if (mainBallance < inputValue) {
    alert('you have not enough money')
    return;
  }
  const decreaseBallance = mainBallance - inputValue;

  document.getElementById('donate-total').innerText = newBallance;
  document.getElementById('main-ballance').innerText = decreaseBallance;


  
 
}

)

// card-2 add function

document.getElementById('donate-btn-2').addEventListener('click', function () {
  



  const inputValue = parseFloat(document.getElementById('input-field-2').value);
  const addBallance = parseFloat(document.getElementById('donate-total-2').innerText);
  if (inputValue <= 0 || isNaN(inputValue)) {

    alert('faild to donate.Please try again.')
    return;
  }
  const newBallance = inputValue + addBallance;
  // decrease main ballance
    const mainBallance = parseFloat(document.getElementById('main-ballance').innerText);
  if (mainBallance < inputValue) {
    alert('you have not enough money')
    return;
  }
  const decreaseBallance = mainBallance - inputValue;

  document.getElementById('donate-total-2').innerText = newBallance;
  document.getElementById('main-ballance').innerText = decreaseBallance;


  
  
}

)

// card- 3 added function

document.getElementById('donate-btn-3').addEventListener('click', function (event) {
  event.preventDefault();



  const inputValue = parseFloat(document.getElementById('input-field-3').value);
  const addBallance = parseFloat(document.getElementById('donate-total-3').innerText);
  if (inputValue <= 0 || isNaN(inputValue)) {

    alert('faild to donate.Please try again.')
    return;
  }

 

  const newBallance = inputValue + addBallance;
  // decrease main ballance
    const mainBallance = parseFloat(document.getElementById('main-ballance').innerText);
  if (mainBallance < inputValue) {
    alert('you have not enough money')
    return;
  }
  const decreaseBallance = mainBallance - inputValue;

  document.getElementById('donate-total-3').innerText = newBallance;
  document.getElementById('main-ballance').innerText = decreaseBallance;


  document.getElementById('donate-btn-3').showModal();
  
}

)





// history part start


 

document.getElementById('donate-btn-1').addEventListener('click',function handleTransactionById1() {
  
  


const h2innerText = document.getElementById('title').innerText;
 
  const inputValue = document.getElementById('input-field').value;
  
  if (isNaN(inputValue)) {
   
    return;
  }
  
const transaction = document.getElementById('history')
   const historyItem = document.createElement('div');
  historyItem.className = "w-11/12 mt-5 mx-auto bg-gray-100 h-20 p-3 rounded-md border-2 border-gray-200 "
  
  const now = new Date();
        const localDate = now.toLocaleDateString();
  const localTime = now.toLocaleTimeString();
  

  historyItem.innerHTML =
  `
<p> ${inputValue} TK Donated for ${h2innerText}</p>
  <span> Date: ${localDate}</span>
  <span> Time: ${localTime}</span>
  `;
  
  transaction.insertBefore(historyItem, transaction.firstChild);
}
)




// history for card 2
document.getElementById('donate-btn-2').addEventListener('click',function handleTransactionById2() {
  
  

  

const h2innerText = document.getElementById('title-2').innerText;
 
  const inputValue = document.getElementById('input-field-2').value;
  
  if (isNaN(inputValue)) {
   
    return;
  }
  
const transaction = document.getElementById('history')
   const historyItem = document.createElement('div');
  historyItem.className = "w-11/12 mt-5 mx-auto bg-gray-100 h-20 p-3 rounded-md border-2 border-gray-200 "
  
  const now = new Date();
        const localDate = now.toLocaleDateString();
  const localTime = now.toLocaleTimeString();
  

  historyItem.innerHTML =
  `
<p> ${inputValue} TK Donated for ${h2innerText}</p>
  <span> Date: ${localDate}</span>
  <span> Time: ${localTime}</span>
  `;
  
  transaction.insertBefore(historyItem, transaction.firstChild);
})
 
// history card 3



document.getElementById('donate-btn-3').addEventListener('click', function handleTransactionById3(event) {
  
  


const h2innerText = document.getElementById('title-3').innerText;
 
  const inputValue = document.getElementById('input-field-3').value;
  if (isNaN(inputValue)) {
   
    return;
  }
  

const transaction = document.getElementById('history')
   const historyItem = document.createElement('div');
  historyItem.className = "w-11/12 mt-5 mx-auto bg-gray-100 h-20 p-3 rounded-md border-2 border-gray-200 "
  
  const now = new Date();
        const localDate = now.toLocaleDateString();
  const localTime = now.toLocaleTimeString();
  

  historyItem.innerHTML =
  `
<p> ${inputValue} TK Donated for ${h2innerText}</p>
  <span> Date: ${localDate}</span>
  <span> Time: ${localTime}</span>
  `;
  
  transaction.insertBefore(historyItem, transaction.firstChild);

  // modal

 
})
 
document.getElementById('history-btn').addEventListener('click', function(){
  document.getElementById('main-section').classList.add('hidden');
  document.getElementById('history').classList.remove('hidden');
  document.getElementById('history-btn').classList.add('bg-btnBG');
  document.getElementById('donate-btn-main').classList.remove('bg-btnBG');
  document.querySelector('.footer').classList.add('hidden');
 
})
document.getElementById('donate-btn-main').addEventListener('click', function () {
  document.getElementById('main-section').classList.remove('hidden');
  document.getElementById('history').classList.add('hidden');
  document.getElementById('history-btn').classList.remove('bg-btnBG');
  document.getElementById('donate-btn-main').classList.add('bg-btnBG');
  document.querySelector('.footer').classList.remove('hidden');
});

document.getElementById('blog-btn').addEventListener('click', function () {
  window.location.href='home.html'
})


// modal part this function use many button

// for card -1
document.getElementById('donate-btn-1').addEventListener('click', function () {
   const Value = getInputValueById('input-field');

  if (Number.isNaN(Value)) {

    window.location.reload();
  } 
})
// for card - 2
document.getElementById('donate-btn-2').addEventListener('click', function () {
   const Value = getInputValueById('input-field-2');

  if (Number.isNaN(Value)) {

    window.location.reload();
  } 
})

// for card -3
document.getElementById('donate-btn-3').addEventListener('click', function () {
  const Value = getInputValueById('input-field-3');

  if (Number.isNaN(Value)) {

    window.location.reload();
  } 

  

})
