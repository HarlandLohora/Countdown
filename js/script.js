const getRemainTime = deadline =>{
  let helper        = 1000;
  let now           = new Date();
  let remainTime    = (new Date(deadline) - now + helper)/helper;
  let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
  let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
  let remainHours   = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
  let remainDays    = Math.floor(remainTime / (3600 * 24));
  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
  }
}

const countdown = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);
  const timerUpdate = setInterval (()=>{
    let rN = getRemainTime(deadline);
    el.innerHTML = `${rN.remainDays}d:${rN.remainHours}h:${rN.remainMinutes}m:${rN.remainSeconds}s.`;

    if(rN.remainTime <= 1){
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
  },1000)
}

countdown("Wed Jun 20 2018 11:45:50 GMT-0500","clock","DEADLINE");
