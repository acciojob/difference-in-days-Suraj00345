var dateDiffInDays = function (date1, date2) {
   var Difference_In_Time = date2.getTime() - date1.getTime();
	 var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
	console.log(Difference_In_Days);
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
