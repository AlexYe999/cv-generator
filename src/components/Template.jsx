import "../styles/template.css";
import Education from "./Education";
import Job from "./Job";

function Template({ info }) {
  const educations = info.education.map((p, i) => {
    if (i !== 0) {
      return (
        <Education
          info={p}
          key={p.id}
          style={{ borderTop: "1px grey solid" }}
        />
      );
    }
    return <Education info={p} key={p.id} />;
  });

  const jobs = info.jobs.map((p, i) => {
    if (i !== 0) {
      return (
        <Job info={p} key={p.id} style={{ borderTop: "1px grey solid" }} />
      );
    }
    return <Job info={p} key={p.id} />;
  });

  return (
    <div className="template">
      <h1>Cirriculum Vitae</h1>
      <h2>General Information</h2>
      <p>Name: {info.name}</p>
      <p>Email: {info.email}</p>
      <p>Phone: {info.phone}</p>
      <h2>Education</h2>
      {educations}
      <h2>Work Experience</h2>
      {jobs}
    </div>
  );
}

export default Template;
