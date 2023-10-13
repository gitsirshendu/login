import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { getProducts } from "../service/Api";

const ProductMDBListing = () => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    let response = await getProducts();
    setProducts(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const columnSymbols = Object.keys(products[0] || {});

  let symbolTable = {
    columns: [],
    rows: [],
  };

  for (let i = 0; i < columnSymbols.length; i++) {
    symbolTable.columns.push({
      sort: "asc",
      label: columnSymbols[i].toUpperCase(),
      field: columnSymbols[i],
    });
  }

  for (let i = 0; i < products.length; i++) {
    symbolTable.rows.push({
      id: products[i].id,
      category: products[i].category,
      subcategory: products[i].subcategory,
      business: products[i].business,
      city: products[i].city,
      name: products[i].name,
      price: `$${products[i].price}`,
    });
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5" data-aos="fade-up">
          <div className="card col-lg-12 my-3">
            <MDBDataTable
              data={symbolTable}
              small
              bordered
              noBottomColumns={true}
              className="mt-5"
              searchLabel="Search Product"
              hover
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductMDBListing;
