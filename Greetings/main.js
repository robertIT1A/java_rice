const time_greet = document.getElementById("time_greet");
const name = document.getElementById("name");
const inputName = document.getElementById("inputName");
const inputTime = document.getElementById("inputTime");
const done = document.getElementById("done");

done.addEventListener("click", function () {
    const Name = inputName.value;
    name.innerHTML = `<span id="name">${Name}</span>`;
    const Time = inputTime.value;
    const hour = parseInt(Time.split(":")[0]);
    if (hour <= 12) {
    greet = "Good Morning";
    } else if (hour > 12) {
    greet = "Good Afternoon";
    } else {
    greet = "Good Evening";
    }
    time_greet.innerHTML = `<span id="time_greet">${greet}</span>`;
});
