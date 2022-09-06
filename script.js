const hoursText = document.querySelector('.hoursText');
const minutesText = document.querySelector('.minutesText');
const secondsText = document.querySelector('.secondsText');
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const asset1 = document.querySelector('.asset1');
const asset2 = document.querySelector('.asset2');
const offerbase = document.querySelector('.offerbase');
const ofertaka = document.querySelector('.ofertaka');
const cashbackcopy = document.querySelector('.cashbackcopy');
const lftasset = document.querySelector('.lftasset');
const rhtasset = document.querySelector('.rhtasset');



checkingHour = 19;
banglaArr = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
dateCalculation();
setInterval(dateCalculation, 1000);


function dateCalculation() {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    var offset = d.getTimezoneOffset();
    console.log(hours,minutes,seconds,offset);
    if (checkingHour == hours) {
        hideSlide1();
    } else {
        displaySlide1();
        checkRemainingTime(hours, minutes, seconds);
    }
}




function checkRemainingTime(hours, minutes, seconds) {

    remainingSeconds = seconds == 0 ? 0 : 60 - seconds;
    if (remainingSeconds == 0) {
        if (minutes == 0) {
            remainingMinutes = 0;
        }
        else {
            remainingMinutes = 60 - minutes;
        }
    } else { remainingMinutes = (60 - 1) - minutes }``

    calcRemainingHours = () => {
        if (hours < checkingHour) {
            return remainingMinutes == 0 && minutes == 0 ? checkingHour - hours : (checkingHour - 1) - hours;
        } else {
            return remainingMinutes == 0 && minutes == 0 ? checkingHour + (24 - hours) : (checkingHour - 1) + (24 - hours);
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
    cashbackcopy.classList.remove('hidden');
    lftasset.classList.remove('hidden');
    rhtasset.classList.remove('hidden');

}

function displaySlide1() {
    hoursText.classList.remove('hidden');
    minutesText.classList.remove('hidden');
    secondsText.classList.remove('hidden');
    bg1.classList.remove('hidden');
    asset1.classList.remove('hidden');
    asset2.classList.remove('hidden');

    bg2.classList.add('hidden');
    offerbase.classList.add('hidden');
    ofertaka.classList.add('hidden');
    cashbackcopy.classList.add('hidden');
    lftasset.classList.add('hidden');
    rhtasset.classList.add('hidden');

}