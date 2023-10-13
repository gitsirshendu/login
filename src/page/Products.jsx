import { useEffect, useState } from "react";
import { getProducts, getUsers } from "../service/Api";

export default function Products() {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    let response = await getProducts();
    setProducts(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(products);
  return (
    <>
      <table className="table container-sm mt-5">
        <thead>
          <tr>
            <th> ID </th>
            <th> Category </th>
            <th> Sub Categpry </th>
            <th> Business </th>
            <th> City </th>
            <th> Name </th>
            <th> Price </th>
          </tr>
        </thead>

        <tbody>
          {products.map((item,key) => (
            <tr key={item.id}>
              <td> {item.id} </td>
              <td> {item.category} </td>
              <td> {item.subcategory} </td>
              <td> {item.business} </td>
              <td> {item.city} </td>
              <td> {item.name} </td>
              <td> {item.price} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
