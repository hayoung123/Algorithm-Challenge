function solution(next_student) {
  let answer = { student: 0, count: 0 };
  const checked = new Set();

  const deep = (student, nextStudent, count) => {
    const students = new Set().add(student);
    while (!students.has(nextStudent) && nextStudent !== 0) {
      students.add(nextStudent);
      checked.add(nextStudent);
      nextStudent = next_student[nextStudent - 1];
      count++;
    }
    if (answer.count < count) answer = { student, count };
  };

  for (let i = next_student.length - 1; i >= 0; i--) {
    if (checked.has(i + 1)) continue;
    deep(i + 1, next_student[i], 1);
  }
  return answer.student;
}
