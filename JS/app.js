document.getElementById('donate-btn-1').addEventListener('click', function (event) {
  event.preventDefault();

  const inputValue = parseFloat(document.getElementById('input-field').value);
  const addBallance = parseFloat(document.getElementById('donate-total').innerText);
  if (inputValue <= 0 || isNaN(inputValue)) {

    alert('faild to donate.Please try again.')
    return;
  }
  const newBallance = inputValue + addBallance;

  document.getElementById('donate-total').innerText = newBallance;

  // decrease main ballance
  const mainBallance = parseFloat(document.getElementById('main-ballance').innerText);
  if (mainBallance < inputValue) {
    alert('you have not enough money')
    return;
  }
  const decreaseBallance = mainBallance - inputValue;
  document.getElementById('main-ballance').innerText = decreaseBallance;

}

)