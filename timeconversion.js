function timeConversion(s) {
    /*
     * Write your code here.
     */
    let times = s.split(':');
    let hour = times[0];
    let mins = times[1];
    let secs = times[2].substring(0, 2);
    let mod = times[2].substring(2);
    
    if (mod === "PM" && hour !== "12") {
	let h = parseInt(hour) + 12;
	hour = h.toString();
    }
    else if (mod === "AM" && hour === "12") hour = "00";

    return `${hour}:${mins}:${secs}`;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("07:05:45AM"));
console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("12:05:45AM"));
console.log(timeConversion("01:05:45AM"));
console.log(timeConversion("01:05:45PM"));