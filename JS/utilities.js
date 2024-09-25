
function getInputValueById(id) {
  const inputValue =parseFloat( document.getElementById(id).value)
  return inputValue;
}

const button= document.getElementById('donate-btn-1')
const inputField= document.getElementById('input-field')
inputField.addEventListener('input', function (e) {
  const inputValue = e.target.value;
  if (inputValue.length === 1) {
    button.removeAttribute('disabled')
  }
})


const button2 = document.getElementById('donate-btn-2');
const inputField2 = document.getElementById('input-field-2')
inputField2.addEventListener('input', function (e)
{
  const value = e.target.value
  if (value.length === 1) {
    button2.removeAttribute('disabled');
  }
})

const button3 = document.getElementById('donate-btn-3')
const inputField3 = document.getElementById('input-field-3')
inputField3.addEventListener('input', function (e) {
  const value = e.target.value;
  if (value.length === 1) {
    button3.removeAttribute('disabled')
  }
})