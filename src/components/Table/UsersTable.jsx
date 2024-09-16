import React from "react";
import dollar from "../../assets/imgs/icons/dollar.svg";
import Image from "next/image";
function UsersTable({ columns, row }) {
  return (
    <div className="table w-full">
      <table className="w-full">
        <thead className="table__head">
          {row?.map((el, idx) => {
            return (
              <tr key={idx}>
                <th scope="col">{el?.ID}</th>
                <th scope="col">{el?.name}</th>
                <th scope="col">{el?.email}</th>
                <th scope="col">{el?.lang}</th>
                <th scope="col">{el?.status}</th>
                {/* <th scope="col">{el?.premium}</th> */}
                {/* <th scope="col">{el?.moderation}</th> */}
                <th scope="col">{el?.action}</th>
              </tr>
            );
          })}
        </thead>
        <tbody className="table__body">
          {columns?.map((el, idx) => {
            return (
              <tr key={idx}>
                <td scope="col">{el?.ID}</td>
                <td scope="col">{el?.name}</td>
                <td scope="col">{el?.email}</td>
                <td scope="col">{el?.lang}</td>
                <td scope="col">{el?.status}</td>
                {/* <td scope="col">{el?.premium}</td> */}
                {/* <td scope="col">{el?.moderation}</td> */}
                <td scope="col">{el?.action}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
