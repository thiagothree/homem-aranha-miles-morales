let btnStatus = document.querySelector('#status')
let statusOnOff = 0

btnStatus.addEventListener('click', function() {
  if (statusOnOff % 2 == 0) {
    btnStatus.classList.add('status_offline');
    statusOnOff += 1
  } else if (statusOnOff % 2 == 1) {
    btnStatus.classList.remove('status_offline');
    statusOnOff += 1
  }
})