import { useState } from "react";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([
    { name: "Mohit", score: 78 },
    { name: "Happy", score: 45 },
    { name: "Daksh", score: 90 },
    { name: "Nitin", score: 68 },
  ]);

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const addStudent = () => {
    if (!name || score === "") return;

    setStudents([...students, { name, score: Number(score) }]);
    setName("");
    setScore("");
  };

  const updateScore = (i, val) => {
    const updated = [...students];
    updated[i].score = Number(val);
    setStudents(updated);
  };

  const total = students.length;
  const passed = students.filter(s => s.score >= 33).length;
  const avg = total
    ? Math.round(students.reduce((a, b) => a + b.score, 0) / total)
    : 0;

  return (
    <div className="container">

      <h1>
        <span>STUDENT</span> SCOREBOARD
      </h1>

      {/* INPUT ROW */}
      <div className="form">
        <input
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button onClick={addStudent}>+ ADD</button>
      </div>

      {/* STATS */}
      <div className="stats">
        <div>
          <p>TOTAL</p>
          <h2>{total}</h2>
        </div>
        <div>
          <p>PASSED</p>
          <h2>{passed}</h2>
        </div>
        <div>
          <p>AVG SCORE</p>
          <h2>{avg}</h2>
        </div>
      </div>

      {/* TABLE */}
      <div className="table">

        <div className="header">
          <span>Name</span>
          <span>Score</span>
          <span>Status</span>
          <span>Update</span>
        </div>

        {students.map((s, i) => {
          const status = s.score >= 33 ? "PASS" : "FAIL";

          return (
            <div className="row" key={i}>
              <span>{s.name}</span>
              <span className="score">{s.score}</span>

              <span className={status === "PASS" ? "pass" : "fail"}>
                {status}
              </span>

              <div className="update">
                <input
                  type="number"
                  defaultValue={s.score}
                  onChange={(e) => updateScore(i, e.target.value)}
                />
                <button>SAVE</button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}