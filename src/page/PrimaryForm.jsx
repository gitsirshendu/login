import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../service/Api";
import swal from "sweetalert";

const ProductForm = () => {
  const initialValues = {
    category: "",
    subcategory: "",
    business: "",
    city: "",
    name: "",
    price: "",
  };

  const subcategoryInitialValues = {
    title: "Choose...",
    value: "",
  };

  const navigate = useNavigate();
  const [product, setProduct] = useState(initialValues);
  const [dataError, setDataError] = useState({});
  const [subcategory, setSubcategory] = useState([subcategoryInitialValues]);

  let name, value;
  const postData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "category") {
      if (value === "Dress") {
        setSubcategory([
          { title: "Men", value: "Men" },
          { title: "Women", value: "Women" },
          { title: "Kids", value: "Kids" },
        ]);
      } else if (value === "Mobile") {
        setSubcategory([
          { title: "Android", value: "Android" },
          { title: "iPhone", value: "iPhone" },
          { title: "Windows", value: "Windows" },
        ]);
      } else if (value === "Watch") {
        setSubcategory([
          { title: "Digital", value: "Digital" },
          { title: "Analogue", value: "Analogue" },
          { title: "Android", value: "Android" },
        ]);
      }
    }

    setProduct({ ...product, [name]: value });

    let errorMsg = "";
    switch (name) {
      case "category":
        errorMsg = "Choose category";
        break;
      case "subcategory":
        errorMsg = "Choose sub category";
        break;
      case "business":
        errorMsg = "Choose business";
        break;
      case "city":
        errorMsg = "Choose city";
        break;
      case "name":
        errorMsg = "Product Name should not be empty";
        break;
      case "price":
        errorMsg = "Product Price should not be empty";
        break;
      default:
        errorMsg = "";
    }

    if (value === null || value === "" || value === undefined) {
      setDataError({ ...dataError, [name]: errorMsg });
    } else {
      setDataError({ ...dataError, [name]: "" });
    }
  };

  const validateData = () => {
    let error = {};
    if (product.category === "") {
      error.category = "Choose category";
    }
    if (product.subcategory === "") {
      error.subcategory = "Choose sub category";
    }
    if (product.business === "") {
      error.business = "Choose business";
    }
    if (product.city === "") {
      error.city = "Choose city name";
    }
    if (product.name === "") {
      error.name = "Provide product name";
    }
    if (product.price === "") {
      error.price = "Provide product price";
    }

    return error;
  };

  const submitData = async (e) => {
    e.preventDefault();
    let ErrorList = validateData();
    setDataError(validateData());
    console.log(product);
    if (Object.keys(ErrorList).length === 0) {
      await addProduct(product);
      swal("Good job!", "Product added successfully!", "success");
      navigate("/products");
    }
  };

  return (
    <div class="container">
      <div class="row justify-content-center mt-5" data-aos="fade-up">
        <div class="col-lg-6">
          <div class="info-wrap">
            <div class="row">
              <div class="info">
                <h4>New Product:</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row my-5 justify-content-center" data-aos="fade-up">
        <div class="col-lg-6 card py-3">
          <form method="post" role="form">
            <div class="row">
              <div class="col">
                <div class="form-group required">
                  <label className="control-label">Category</label>
                  <select
                    class="custom-select"
                    id="category"
                    name="category"
                    onChange={(e) => postData(e)}
                    required
                  >
                    <option selected disabled value="">
                      Select Category
                    </option>
                    <option value="Dress">Dress</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Watch">Watch</option>
                  </select>
                  <div class="validate text-danger">{dataError.category}</div>
                </div>
              </div>
              <div class="col">
                <div class="form-group required">
                  <label className="control-label">Sub Category</label>
                  <select
                    class="custom-select"
                    id="subcategory"
                    name="subcategory"
                    onChange={(e) => postData(e)}
                    required
                  >
                    <option selected disabled value="">
                      Select Sub category
                    </option>
                    {subcategory.map((item, key) => {
                      return (
                        <option key={key} value={item.value}>
                          {item.title}
                        </option>
                      );
                    })}
                  </select>
                  <div class="validate text-danger">
                    {dataError.subcategory}
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group required">
              <label className="control-label">Business</label>
              <select
                class="custom-select"
                id="business"
                name="business"
                onChange={(e) => postData(e)}
                required
              >
                <option selected disabled value="">
                  Select Business
                </option>
                <option value="Company Name">Company Name</option>
                <option value="Other Company">Other Company</option>
              </select>
              <div class="validate text-danger">{dataError.business}</div>
            </div>

            <div class="form-group required">
              <label className="control-label">City</label>
              <select
                class="custom-select"
                id="city"
                name="city"
                onChange={(e) => postData(e)}
                required
              >
                <option selected disabled value="">
                  Select City
                </option>
                <option value="Kolkata">Kolkata</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <div class="validate text-danger">{dataError.city}</div>
            </div>

            <div class="form-group required">
              <label className="control-label">Product Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="Product Name"
                onChange={(e) => postData(e)}
              />
              <div class="validate text-danger">{dataError.name}</div>
            </div>

            <div class="form-group required">
              <label className="control-label">Product Price</label>
              <input
                type="text"
                class="form-control"
                name="price"
                id="price"
                placeholder="Product Price"
                onChange={(e) => postData(e)}
              />
              <div class="validate text-danger">{dataError.price}</div>
            </div>

            <div class="text-center">
              <button
                type="submit"
                onClick={submitData}
                className="btn btn-primary"
              >
                Add more
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
