import React, { useState } from "react";
import { addQualification } from "../service/Api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Qualification = () => {
  const initialValues = {
    degree: "",
    year: "",
  };

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState([initialValues]);

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {
    // alert(formValues.length)
    if (formValues.length < 3) {
      setFormValues([...formValues, initialValues]);
    }else{
      swal("")
      swal("Error", "Not more than 3", "error");
    }
  };

  const removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(JSON.stringify(formValues));
    await addQualification(formValues);
    navigate("/qualifications");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5" data-aos="fade-up">
        <div className="col-lg-4">
          <div className="info-wrap">
            <div className="row">
              <div className="info">
                <h4>Qualification:</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 justify-content-center" data-aos="fade-up">
        <div className="col-lg-4 card py-3">
          <form onSubmit={handleSubmit}>
            {formValues.map((element, index) => (
              <div className="form-inline" key={index}>
                <div className="form-group">
                  <input
                    type="text"
                    name="degree"
                    required
                    placeholder={`Degree ${index + 1}`}
                    value={element.degree || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>

                <div className="form-group mb-2 mt-1">
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={element.year || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                {index ? (
                  <button
                    type="button"
                    className="btn btn-sm btn-danger ml-1"
                    onClick={() => removeFormFields(index)}
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                ) : null}
              </div>
            ))}
            <div className="button-section mt-2">
              <button
                className="btn btn-sm btn-success"
                type="button"
                onClick={() => addFormFields()}
              >
                <i class="fas fa-plus"></i>
              </button>
              <button className="btn btn-sm btn-primary" type="submit">
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
