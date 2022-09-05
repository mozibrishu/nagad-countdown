const hoursText = document.querySelector('.hoursText');
const minutesText = document.querySelector('.minutesText');
const secondsText = document.querySelector('.secondsText');
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const asset1 = document.querySelector('.asset1');
const asset2 = document.querySelector('.asset2');
const offerbase = document.querySelector('.offerbase');
const ofertaka = document.querySelector('.ofertaka');




checkingHour = 13;
banglaArr = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
dateCalculation();
setInterval(dateCalculation, 1000);


function dateCalculation() {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (checkingHour == hours) {
        hideSlide1();
    } else {
        checkRemainingTime(hours, minutes, seconds);
    }
}




function checkRemainingTime(hours, minutes, seconds) {

    remainingSeconds = seconds == 0 ? 0 : 60 - seconds;
    remainingMinutes = remainingSeconds == 0 ? 60 - minutes : (60 - 1) - minutes;

    calcRemainingHours = () => {
        if (hours < checkingHour) {
            return remainingMinutes == 0 ? checkingHour - hours : (checkingHour - 1) - hours;
        } else {
            return remainingMinutes == 0 ? checkingHour + (24 - hours) : (checkingHour - 1) + (24 - hours);
        }
    }
    remainingHours = calcRemainingHours();
    secondsText.innerHTML = transformToBangla(remainingSeconds);
    minutesText.innerHTML = transformToBangla(remainingMinutes);
    hoursText.innerHTML = transformToBangla(remainingHours);


}


function transformToBangla(num) {
    if (num < 10) {
        return '০' + banglaArr[num];
    }
    else {
        firstVar = Math.floor(num / 10);
        return banglaArr[firstVar] + banglaArr[num % 10];
    }
}


function hideSlide1() {
    hoursText.classList.add('hidden');
    minutesText.classList.add('hidden');
    secondsText.classList.add('hidden');
    bg1.classList.add('hidden');
    asset1.classList.add('hidden');
    asset2.classList.add('hidden');

    bg2.classList.remove('hidden');
    offerbase.classList.remove('hidden');
    ofertaka.classList.remove('hidden');



}