import clsx from "clsx";
import React from "react";
import { useFlexLayout, useResizeColumns, useTable } from "react-table";
import Cell from "./Cell";
import Header from "./Header";
import "./style.css";

const defaultColumn = {
  minWidth: 50,
  width: 150,
  maxWidth: 400,
  Cell: Cell,
  Header: Header,
  sortType: "alphanumericFalsyLast",
};

export default function Table({ columns, data, dispatch: dataDispatch }) {
  console.log("🚀 ~ Table ~ data:", data);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
        dataDispatch,
      },
      useFlexLayout,
      useResizeColumns
    );

  function isTableResizing() {
    for (let headerGroup of headerGroups) {
      for (let column of headerGroup.headers) {
        if (column.isResizing) {
          return true;
        }
      }
    }

    return false;
  }

  return (
    <>
      <div
        {...getTableProps()}
        className={clsx("table", isTableResizing() && "noselect")}
      >
        <div>
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => column.render("Header"))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render("Cell")}
                  </div>
                ))}
              </div>
            );
          })}
          <div
            className="tr add-row"
            onClick={() => dataDispatch({ type: "add_row" })}
          >
            <span className="svg-icon svg-gray" style={{ marginRight: 4 }}>
              <>+</>
            </span>
            New
          </div>
        </div>
      </div>
    </>
  );
}
