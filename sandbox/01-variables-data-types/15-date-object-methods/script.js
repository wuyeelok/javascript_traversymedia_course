/* let x;
let d = new Date();

// Date methods

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);
 */

let z;
const today = new Date();

z = today.toString();
z = today.getTime();

console.log(z);

const year = today.getFullYear();
console.log(`year is ${year}`);

const month = today.getMonth() + 1;
console.log(`month is ${month}`);

const dayOfMonth = today.getDate();
console.log(`dayOfMonth is ${dayOfMonth}`);

const dayOfWeek = today.getDay();
console.log(`Day of week is ${dayOfWeek}`);

const hour = today.getHours();
console.log(`Current hour is ${hour}`);

// Intl.DateTimeFormat

let zz = Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "long",
}).format(today);
console.log(zz, typeof zz);

const gggg = Intl.DateTimeFormat("en-GB", {
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "long",
  timeZone: "America/New_York",
}).format(today);
console.log(gggg);
