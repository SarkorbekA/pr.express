"use client";
import React from "react";

function Category({ columns, row }) {
  return (
    <div className="table-resource">
      <div className="table w-full">
        <table className="w-full">
          <thead className="table__head">
            {row?.map((el, idx) => {
              return (
                <tr key={idx}>
                  <th scope="col">{el?.name}</th>
                  <th scope="col">{el?.category}</th>
                  <th scope="col">{el?.lang}</th>
                  <th scope="col">{el?.link}</th>
                  <th scope="col">{el?.status}</th>
                  <th scope="col">{el?.action}</th>
                </tr>
              );
            })}
          </thead>
          <tbody className="table__body">
            {columns?.map((el, idx) => {
              return (
                <tr key={idx}>
                  <td scope="col">{el?.name}</td>
                  <td scope="col">{el?.category}</td>
                  <td scope="col">{el?.lang}</td>
                  <td scope="col">{el?.link}</td>
                  <td scope="col">{el?.status}</td>
                  <td scope="col">{el?.action}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
