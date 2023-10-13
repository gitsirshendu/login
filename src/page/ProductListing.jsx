import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getProducts } from "../service/Api";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    let response = await getProducts();
    setProducts(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // console.log(products);

  const columnsx = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Sub Category",
      selector: (row) => row.subcategory,
    },
    {
      name: "Business",
      selector: (row) => row.business,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
  ];

  const columns = [];
  const columnSymbols = Object.keys(products[0] || {});
  for (let i = 0; i < columnSymbols.length; i++) {
    columns.push({
      name: columnSymbols[i].toUpperCase(),
      selector: columnSymbols[i],
    });
  }

  const dataRows = [];
  for (let i = 0; i < products.length; i++) {
    dataRows.push({
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
            <DataTable
              columns={columns}
              data={dataRows}
              highlightOnHover
              pagination
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 15, 25, 50]}
              paginationComponentOptions={{
                rowsPerPageText: "Records per page:",
                rangeSeparatorText: "out of",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
