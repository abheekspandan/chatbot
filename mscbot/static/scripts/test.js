const d = new Date();
let day = d.getDay();
       
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const m = new Date();
let fmonth = month[m.getMonth()];

const y = new Date();
let year = y.getFullYear();

let fulldate=`${day} ${fmonth},${year}`
document.write(fulldate);
$('#date-chat').append(fulldate);