import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../Redux/ProductSlice";
import ReactPaginate from "react-paginate";
// import "./pagination.css";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, key) => (
          <div className="col-3" key={key}>
            <div class="card mt-2">
              <img
                src={`${item.image}`}
                class="card-img-top"
                alt={item.title}
                title={item.title}
              />
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p
                  class="card-text"
                  dangerouslySetInnerHTML={{
                    __html: item?.description.slice(0, 50),
                  }}
                ></p>
                {/* <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a> */}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

const Dashboard = () => {
  const { products, status, totalRecords } = useSelector(
    (state) => state.Product
  );
  const dispatch = useDispatch();

  //Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const endOffset = itemOffset + itemsPerPage;

  // console.log("productssd",Object.keys(products).length );

  const currentItems = useMemo(() => {
    if (Object.keys(products).length !== 0) {
      return products?.slice(itemOffset, endOffset);
    }
  }, [itemOffset]);

  // console.log("currentItemsfd", currentItems);

  const pageCount = Math.ceil(totalRecords / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  console.log(currentItems);

  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  return (
    <>
      <div class="container">
        <div class="row justify-content-center mt-5" data-aos="fade-up">
          <div class="col-lg-10">
            <div class="info-wrap">
              <div class="row">
                <div class="info">
                  <h4>Products</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          {status === "success" ? (
            <>
              <Items currentItems={currentItems} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 20,
                  boxSizing: "border-box",
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={4}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                /> */}

                <ReactPaginate
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={4}
                  pageCount={pageCount}
                  breakLabel={"..."}
                  marginPagesDisplayed={2}
                  nextLabel="next >"
                  previousLabel="< previous"
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>
            </>
          ) : (
            <>
              <h3>Loading...</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
