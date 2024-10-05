import "../styles/education-edit.css";

function EducationEdit({ info, handleChange, id, style }) {
  const elem = info.education.find((x) => {
    return x.id === id;
  });
  return (
    <div className="education" style={style}>
      <div className="input-container">
        <label htmlFor="name">School Name: </label>
        <input
          type="text"
          name="name"
          value={elem.school}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.education.find((x) => {
              return x.id === id;
            }).school = e.target.value;
            handleChange(copy);
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="major">Major: </label>
        <input
          type="text"
          name="major"
          value={elem.major}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.education.find((x) => {
              return x.id === id;
            }).major = e.target.value;
            handleChange(copy);
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="date">Attended: </label>
        <input
          type="date"
          name="date"
          value={elem.date1}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.education.find((x) => {
              return x.id === id;
            }).date1 = e.target.value;
            handleChange(copy);
          }}
        />
        <input
          type="date"
          name="date"
          value={elem.date2}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.education.find((x) => {
              return x.id === id;
            }).date2 = e.target.value;
            handleChange(copy);
          }}
        />
      </div>
      <button
        style={{ margin: "0.5rem 0" }}
        onClick={() => {
          const copy = structuredClone(info);
          const idx = copy.education.findIndex((x) => x.id === id);
          copy.education.splice(idx, 1);
          handleChange(copy);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default EducationEdit;
