function calculateGrade() {
  let marks1 = Number(document.getElementById("mark1").value);
  let marks2 = Number(document.getElementById("mark2").value);
  let marks3 = Number(document.getElementById("mark3").value);
  let marks4 = Number(document.getElementById("mark4").value);
  let marks5 = Number(document.getElementById("mark5").value);
  let marks6 = Number(document.getElementById("mark6").value);
  let marks7 = Number(document.getElementById("mark7").value);

  let totalMarks = marks1 + marks2 + marks3 + marks4 + marks5 + marks6 + marks7;

  document.getElementById("totalMarks").innerHTML =
    "<p>Total Marks: " + totalMarks + "</p>";

  if (totalMarks >= 700) {
    document.getElementById("result").innerHTML =
      "<h3 style='color: green;'>Distinction</h3>";
  } else if (totalMarks >= 600) {
    document.getElementById("result").innerHTML =
      "<h3 style='color: Black;'>First Division</h3>";
  } else if (totalMarks >= 500) {
    document.getElementById("result").innerHTML =
      "<h3 style='color: Black;'>Second Division</h3>";
  } else if (totalMarks >= 400) {
    document.getElementById("result").innerHTML =
      "<h3 style='color: Black;'>Third Division</h3>";
  } else if (totalMarks < 400) {
    document.getElementById("result").innerHTML =
      "<h3 style='color: red;'>Fail</h3>";
  }
}
