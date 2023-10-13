import { useEffect, useState } from "react";
import { getQualifications } from "../service/Api";

export default function Qualifications() {
  const [qualifications, setQualifications] = useState([]);

  const loadData = async () => {
    let response = await getQualifications();
    setQualifications(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(qualifications);
  return (
    <>
      <table className="table container-sm mt-5">
        <thead>
          <tr>

            <th> Degree </th>
            <th> Year </th>
            
          </tr>
        </thead>

        <tbody>
          {qualifications.map((item,key) => (
            <tr key={key}>

              <td> {item.degree} </td>
              <td> {item.year} </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
