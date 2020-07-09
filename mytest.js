const emails = []
const mailFormat =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const submit = () => {
  const email = document.getElementById('email').value
  if(email.match(mailFormat)) {
    alert('Matches')
    emails.push(email)
    window.open(`mailto:${email}`)
    console.log('Emails:' , emails)
  } else {
    alert('Not a mail address')
  }
}