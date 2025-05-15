// dates and times 

// a constructor is generally going to create a new object for us 

const now = new Date();

console.log(now);

console.log(typeof now);

// year, months, day, times 

console.log('getFullYear', now.getFullYear());

console.log('getMonth', now.getMonth());

console.log('getDate', now.getDate());

console.log('getDay', now.getDay());

console.log('getHours', now.getHours());

console.log('getMinutes', now.getMinutes());

console.log('getSeconds', now.getSeconds());

// timestamp number of milliseconds from 1 jan 1970

console.log('timestamp:', now.getTime());

console.log(now.toDateString());

console.log(now.toTimeString());

console.log(now.toLocaleString());

// its a lot easier to use timestamps than using dates 

const before = new Date('February 1 2025 7:30:59');

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();

console.log(diff);


// 1000ms in 1s and 60s is 1m
const mins = Math.round(diff/1000/60);

console.log(mins);
const hours = Math.round(mins/60);
console.log(hours);

const days = Math.round(hours/24);

console.log(days);

console.log(`the blog was written ${days} ago`);

// converting timestamps to date objects

const timeStamp = 1744798482731;

console.log(new Date(timeStamp));

// digital clock

const clock = document.querySelector('.clock');

const tick = () => {
    const noww = new Date();
    const h = noww.getHours();
    const m = noww.getMinutes();
    const s = noww.getSeconds();
    //console.log(h, m, s);
    const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span> 
    `;
    clock.innerHTML = html;
};

// we need tick to be called every second , 1000ms = 1s 
setInterval(tick, 1000);

// date fns 
// https://date-fns.org/

// https://date-fns.org/v4.1.0/docs/format

const nowa = new Date();

console.log(dateFns.isToday(nowa));

// formatting options, check website for tokens that u could use https://date-fns.org/v4.1.0/docs/format 
console.log(dateFns.format(nowa, 'YYYY'));

console.log(dateFns.format(nowa, 'MMMM'));

console.log(dateFns.format(nowa, 'dddd'));

console.log(dateFns.format(nowa, 'Do'));

console.log(dateFns.format(nowa, 'dddd, Do, MMMM, YYYY'));

// comparing dates 

console.log(dateFns.distanceInWords(nowa, before));

console.log(dateFns.distanceInWords(nowa, before, {addSuffix: true}));



