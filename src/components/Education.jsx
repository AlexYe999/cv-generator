import "../styles/education.css";

function Education({ info, style }) {
  return (
    <div className="education" style={style}>
      <p>School Name: {info.school}</p>
      <p>Major: {info.major}</p>
      <p>
        Attended: {info.date1} {info.date2 !== "" ? "to" : ""} {info.date2}
      </p>
    </div>
  );
}

export default Education;
