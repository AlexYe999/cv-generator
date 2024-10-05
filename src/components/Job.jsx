import "../styles/job.css";

function Job({ info, style }) {
  return (
    <div className="job" style={style}>
      <p>Company Name: {info.name}</p>
      <p>Position Title: {info.title}</p>
      <p>Responsibilities: {info.resp}</p>
      <p>
        During: {info.date1} {info.date2 !== "" ? "to" : ""} {info.date2}
      </p>
    </div>
  );
}

export default Job;
