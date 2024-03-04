function Data() {
  const names = document.getElementById("names").value;
  const numbers = document.getElementById("pn").value;
  const place = document.getElementById("city").value;
  console.log(names);

  function Student(names, numbers, place) {
    this.names = names;
    this.numbers = numbers;
    this.place = place;
  }

  const student = new Student(names, numbers, place);

  let student_storage = JSON.parse(localStorage.getItem("student_storage")) || [];

  student_storage.push(student);

  localStorage.setItem("student_storage", JSON.stringify(student_storage));

  // location.reload();
  console.log(student_storage);
  StudentsDetails();
}

function StudentsDetails() {
  const student_details = document.getElementById("studentDetails");
  student_details.innerHTML = "";
  const student_array = JSON.parse(localStorage.getItem("student_storage"));
  console.log(student_array);
  student_array.forEach((student) => {
    const details = document.createElement("li");
    // console.log(student.names);
    details.textContent = `Name : ${student.names}, Phone No. : ${student.numbers}, City : ${student.place}`
    student_details.append(details)
  });

}

document.getElementById("myForm").addEventListener("submit", StudentsDetails());