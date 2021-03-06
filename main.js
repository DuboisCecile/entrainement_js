const scores = [
  [3, 12, 18, 2, 8],
  [20, 14, 2, 2, 17],
  [6, 16, 4],
  [18, 3, 13, 14, 14],
  [15, 12, 10, 7, 19],
  [2, 19, 8, 13, 5],
  [16, 4, 0, 9, 12],
  [6, 15, 15, 12, 4],
  [8, 2, 2, 9, 4],
  [9, 9, 7, 6, 5],
  [8, 8, 15, 7, 1],
  [1, 2, 17, 5, 12],
  [7, 15, 13, 1, 14],
  [5, 6, 18, 7],
  [11, 15, 12, 5, 1],
  [19, 13, 6, 8, 13],
  [5, 1, 11, 8, 17],
  [11, 6, 18, 3, 15],
  [11, 10, 12, 9, 16],
  [13, 14, 18, 13, 19],
  [6, 9, 0, 1, 16],
  [15, 4, 2, 13, 0],
  [17, 13],
  [13, 16, 4, 10, 14],
  [3, 8, 6, 13, 16],
  [17, 9, 14, 16, 9],
  [10, 1, 2, 1, 17],
  [],
  [7, 13, 4, 4, 4],
  [0, 14, 11, 2, 12],
];

const scoresTableBody = document.getElementById("scores-table-body");

const average = (studentScores) => {
  const row = document.createElement("tr");

  let sum = 0;
  for (let i = 0; i < 5; i++) {
    const cell = document.createElement("td");
    if (i < studentScores.length) {
      cell.innerHTML = studentScores[i];
      sum += studentScores[i];
    }
    row.appendChild(cell);
  }

  const averageCell = document.createElement("td");
  averageCell.innerHTML =
    studentScores.length !== 0
      ? Math.round((sum / studentScores.length) * 10) / 10
      : 0;
  row.appendChild(averageCell);

  scoresTableBody.appendChild(row);
};

for (studentScores of scores) {
  average(studentScores);
}
