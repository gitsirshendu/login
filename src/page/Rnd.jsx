import React, { useState } from "react";

function Rnd() {
  const [userinfo, setUserInfo] = useState({
    languages: []
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    // Case 1 : The user checks the box
    if (checked) {
      if (userinfo.languages.length < 3) {
        setUserInfo({
          languages: [...languages, value],
        });
      } else {
        alert("Already 3");
      }
    }
    // Case 2 : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
      });
    }
  };

  return (
    <>
      <div className="container-fluid top ">
        <div className="container mt-5 pb-5 pt-5">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Javascript"
                    id="flexCheckDefault"
                    onChange={handleChange}
                    checked={userinfo.languages.includes("Javascript")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Javascript
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Python"
                    id="flexCheckDefault"
                    onChange={handleChange}
                    checked={userinfo.languages.includes("Python")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Python
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Java"
                    id="flexCheckDefault"
                    onChange={handleChange}
                    checked={userinfo.languages.includes("Java")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Java
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="PHP"
                    id="flexCheckDefault"
                    onChange={handleChange}
                    checked={userinfo.languages.includes("PHP")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    PHP
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C#"
                    id="flexCheckDefault"
                    onChange={handleChange}
                    checked={userinfo.languages.includes("C#")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    C#
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C++"
                    id="flexCheckDefault"
                    onChange={handleChange}
                    checked={userinfo.languages.includes("C++")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    C++
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C"
                    id="flexCheckDefault"
                    onChange={handleChange}
                    checked={userinfo.languages.includes("C")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    C
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Typescript"
                    id="flexCheckDefault"
                    onChange={handleChange}
                    checked={userinfo.languages.includes("Typescript")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Typescript
                  </label>
                </div>
              </div>
            </div>

            <div className="form-control mt-3 mb-3 text-center">
              <textarea
                className="form-control text"
                name="response"
                value={userinfo.languages}
                placeholder="The checkbox values will be displayed here "
                id="floatingTextarea2"
                style={{ height: "150px" }}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Rnd;
