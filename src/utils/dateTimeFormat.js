export function getFormattedDateTime(d) {
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();
    return datestring
 }

 // Should have used ES6 and should have been ts.
