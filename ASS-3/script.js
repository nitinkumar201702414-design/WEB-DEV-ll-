let students = [];

function addStudent() {
  const name = document.getElementById("name").value;
  const score = parseInt(document.getElementById("score").value);

  if (!name || isNaN(score)) {
    alert("Enter valid data");
    return;
  }

  students.push({ name, score });
  render();

  document.getElementById("name").value = "";
  document.getElementById("score").value = "";
}

function render() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  let total = students.length;
  let passed = 0;
  let sum = 0;

  students.forEach((s, index) => {
    const status = s.score >= 33 ? "PASS" : "FAIL";
    if (status === "PASS") passed++;

    sum += s.score;

    tbody.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.score}</td>
        <td class="${status === "PASS" ? "pass" : "fail"}">${status}</td>
        <td>
          <input type="number" value="${s.score}" id="edit-${index}">
          <button class="save-btn" onclick="updateScore(${index})">SAVE</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("passed").innerText = passed;
  document.getElementById("avg").innerText = total ? Math.round(sum / total) : 0;
}

function updateScore(index) {
  const newScore = parseInt(document.getElementById(`edit-${index}`).value);

  if (isNaN(newScore)) {
    alert("Invalid score");
    return;
  }

  students[index].score = newScore;
  render();
}