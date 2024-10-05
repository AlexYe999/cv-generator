import "../styles/editor.css";
import EducationEdit from "./EducationEdit";
import JobEdit from "./JobEdit";

function Editor({ handleChange, info }) {
  const educations = info.education.map((p, i) => {
    if (i !== 0)
      return (
        <EducationEdit
          info={info}
          key={p.id}
          handleChange={handleChange}
          id={p.id}
          style={{ borderTop: "1px black solid" }}
        />
      );
    return (
      <EducationEdit
        info={info}
        key={p.id}
        handleChange={handleChange}
        id={p.id}
      />
    );
  });

  const jobs = info.jobs.map((p, i) => {
    if (i !== 0)
      return (
        <JobEdit
          info={info}
          key={p.id}
          handleChange={handleChange}
          id={p.id}
          style={{ borderTop: "1px black solid" }}
        />
      );
    return (
      <JobEdit info={info} key={p.id} handleChange={handleChange} id={p.id} />
    );
  });

  return (
    <div className="editor">
      <h1>Editor</h1>
      <h2>General Information</h2>
      <div className="input-container">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.name = e.target.value;
            handleChange(copy);
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.email = e.target.value;
            handleChange(copy);
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          name="phone"
          value={info.phone}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.phone = e.target.value;
            handleChange(copy);
          }}
        />
      </div>
      <h2>Education</h2>
      {educations}
      <button
        className="add"
        onClick={() => {
          const copy = structuredClone(info);
          copy.education.push({
            id: crypto.randomUUID(),
            school: "",
            major: "",
            date1: "",
            date2: "",
          });
          handleChange(copy);
        }}
      >
        Add More
      </button>
      <h2>Work Experience</h2>
      {jobs}
      <button
        className="add"
        onClick={() => {
          const copy = structuredClone(info);
          copy.jobs.push({
            id: crypto.randomUUID(),
            name: "",
            title: "",
            resp: "",
            date1: "",
            date2: "",
          });
          handleChange(copy);
        }}
      >
        Add More
      </button>
    </div>
  );
}

export default Editor;
