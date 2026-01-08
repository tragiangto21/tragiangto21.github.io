function calculateAverage() {
    const grades = document.querySelectorAll(".grade");
    let sum = 0;
    let count = 0;

    grades.forEach(function (input) {
        if (input.value !== "") {
            sum += Number(input.value);
            count++;
        }
    });

    if (count > 0) {
        const average = sum / count;
        document.getElementById("result").textContent =
            "Average Grade = " + average.toFixed(2);
    } else {
        document.getElementById("result").textContent =
            "Please enter grades for all subjects.";
    }
}
