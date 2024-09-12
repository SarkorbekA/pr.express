import React from "react";
import dollar from "../../assets/imgs/icons/dollar.svg";
import Image from "next/image";
function DashboardTable({ columns, row }) {
  return (
    <div className="table w-full">
      <table className="w-full">
        <thead className="table__head">
          {row?.map((el, idx) => {
            return (
              <tr key={idx}>
                <th scope="col">{el?.name}</th>
                <th scope="col">{el?.sum}</th>
                <th scope="col">{el?.date}</th>
                <th scope="col">{el?.content}</th>
                <th scope="col">{el?.ID}</th>
                {/* <th scope="col">{el?.status}</th> */}
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
                <td scope="col">
                  <div className="flex items-center">
                    {el?.sum}{" "}
                    <Image
                      className={el?.sum ? "w-[7px] h-[16px] ms-1" : "hidden"}
                      src={dollar}
                      alt=""
                    />
                  </div>
                </td>
                <td scope="col">{el?.date}</td>
                <td scope="col">{el?.content}</td>
                <td scope="col">{el?.ID}</td>
                {/* <td scope="col">{el?.status}</td> */}
                <td scope="col">{el?.action}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTable;
