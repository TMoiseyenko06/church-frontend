
const apiKey = 'u]l]^dkxt[fi!qNz~$i[^PLQiW4!l|&9qo>qxI0(/257vJp57w9~7bkzWJ'
const form = document.getElementById('reg-form')
const wrapper_1 = document.getElementById('wrap1')
const wrapper_2 = document.getElementById('wrap2')
const apiUrl = 'https://church-concert.onrender.com'
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const ran = false

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

async function checkEmail(email){
  return await fetch(`${apiUrl}/person/check-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': apiKey
    },
    body: JSON.stringify({ 
        "email":email})
  })
  .then(response =>{
    if (response.ok){
      wrapper_1.style.display = 'none';
      wrapper_2.style.display = 'block'
      return response.json()
    }
    return false
  })
}

async function SubmitEvent(e){
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    if (validateEmail(email) && await checkEmail(email)){
      fetch(`${apiUrl}/person`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey
        },
        body: JSON.stringify({ 
            "first_name":firstName,
            "last_name":lastName,
            "email":email})
      })
      .then(response => {
        wrapper_1.style.display = 'none';
        wrapper_2.style.display = 'block'
        return response.json()
      })
    } else {
      alert('Please Enter a valid Email!')
    }

      
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (ran==false){
    SubmitEvent(event)
    ran = true
  }

},{ once: true })