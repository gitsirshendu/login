import { useEffect, useState } from "react";
import { getUsers } from "../service/Api";
import DataTable from "react-data-table-component";

export default function Users() {
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns = [];
  const columnSymbols = Object.keys(users[0] || {});
  let numberOfColumns = columnSymbols.length;
  for (let i = 0; i < numberOfColumns; i++) {
    // console.log(columnSymbols[i]);
    if (columnSymbols[i] !== "password") {
      columns.push({
        name: columnSymbols[i].toUpperCase(),
        selector: columnSymbols[i],
        sortable: true,
      });
    }
  }
  // console.log(columns);
  const dataRows = [];
  for (let i = 0; i < users.length; i++) {
    dataRows.push({
      id: users[i].id,
      name: users[i].name,
      mobile: users[i].mobile,
      email: users[i].email,
      password: users[i].password,
      dob: users[i].dob,
    });
  }
  // console.log(users);
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
}