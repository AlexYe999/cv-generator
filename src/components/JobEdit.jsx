import "../styles/job-edit.css";

function JobEdit({ info, handleChange, id, style }) {
  const elem = info.jobs.find((x) => {
    return x.id === id;
  });
  return (
    <div className="jobs" style={style}>
      <div className="input-container">
        <label htmlFor="name">Company Name: </label>
        <input
          type="text"
          name="name"
          value={elem.name}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.jobs.find((x) => {
              return x.id === id;
            }).name = e.target.value;
            handleChange(copy);
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={elem.title}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.jobs.find((x) => {
              return x.id === id;
            }).title = e.target.value;
            handleChange(copy);
          }}
        />
      </div>
      <div className="input-container resp">
        <label htmlFor="resp">Reponsibilities: </label>
        <textarea
          name="title"
          value={elem.resp}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.jobs.find((x) => {
              return x.id === id;
            }).resp = e.target.value;
            handleChange(copy);
          }}
        ></textarea>
      </div>
      <div className="input-container">
        <label htmlFor="date">During: </label>
        <input
          type="date"
          name="date"
          value={elem.date1}
          onChange={(e) => {
            const copy = structuredClone(info);
            copy.jobs.find((x) => {
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
            copy.jobs.find((x) => {
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
          const idx = copy.jobs.findIndex((x) => x.id === id);
          copy.jobs.splice(idx, 1);
          handleChange(copy);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default JobEdit;
