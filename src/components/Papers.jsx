import Ad from "./Ad";
import Navbar from "./Navbar";

const Papers = () => {
  const years = [2024, 2023, 2022, 2021, 2020, 2019];
  return (
    <>
      <Navbar />
      <Ad />
      <div
        style={{
          width: "100%",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="year-page"
      >
        <div
          style={{
            width: "90%",
            borderRadius: "15px",
            background: "#BFBBA9",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              //   background: "red",
            }}
          >
            {years.map((item, idx) => (
              <>
                <div
                  key={idx}
                  style={{
                    borderRadius: "15px",
                    height: "100px",
                    background: "#FFF2AF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "10px",
                    cursor: "pointer",
                  }}
                  className="year"
                >
                  <p
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    {item}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Papers;
