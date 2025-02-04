import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div
      style={{
        background: "#DAD2FF",
        height: "70vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="home-page"
    >
      <div
        style={{
          background: "#B2A5FF",
          width: "70vw",
          borderRadius: "15px",
        }}
        id="course-sel"
      >
        <p
          style={{
            fontSize: "30px",
          }}
        >
          Select Your Course
        </p>
        <div
          style={{
            display: "flex",
            marginTop: "6vh",
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          className="sel-container"
        >
          <div
            style={{
              height: "15vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "15px",
              background: "#FFF2AF",
            }}
            className="selection"
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Select State:
            </p>
            <select name="states" id="states">
              <option>Delhi</option>
              <option>Harayana</option>
              <option>UP</option>
              <option>Assam</option>
            </select>
          </div>
          <div
            style={{
              borderRadius: "15px",
              background: "#FFF2AF",
              height: "15vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="selection"
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Select University:
            </p>
            <select name="states" id="states">
              <option>MDU</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
          </div>
          <div
            style={{
              borderRadius: "15px",
              background: "#FFF2AF",
              height: "15vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="selection"
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Select Course:
            </p>
            <select name="states" id="states">
              <option>BSc</option>
              <option>BCA</option>
              <option>BBA</option>
              <option>BCOM</option>
            </select>
          </div>
          <div
            style={{
              borderRadius: "15px",
              background: "#FFF2AF",
              height: "15vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="selection"
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Select Semester:
            </p>
            <select name="states" id="states">
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
            </select>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "4vh",
          }}
        >
          <Link to="/papers">
            <button
              style={{
                height: "35px",
                width: "250px",
                border: "none",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
