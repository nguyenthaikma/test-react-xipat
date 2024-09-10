import React, { useReducer } from "react";
import Table from "../../components/Table";
import makeData from "../../components/Table/utils";

function reducer(state, action) {
  switch (action.type) {
    case "add_row":
      return {
        ...state,
        data: [...state.data, { ID: state.data[state.data.length - 1].ID + 1 }],
      };
    case "delete_row":
      const deleteRowIndex = state.data.findIndex(
        (item) => item.ID === action.rowId
      );
      const newDatas = [...state.data];
      newDatas.splice(deleteRowIndex, 1);
      return {
        ...state,
        data: newDatas,
      };
    case "update_column_header":
      const index = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
      return {
        ...state,
        columns: [
          ...state.columns.slice(0, index),
          {
            ...state.columns[index],
            label: action.label,
            id: action.label.toLowerCase(),
          },
          ...state.columns.slice(index + 1, state.columns.length),
        ],
      };
    case "update_cell":
      return {
        ...state,
        data: state.data.map((row, index) => {
          if (index === action.rowIndex) {
            return {
              ...state.data[action.rowIndex],
              [action.columnId]: action.value,
            };
          }
          return row;
        }),
      };
    case "add_column_to_left":
      const leftIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
      let leftId = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      return {
        ...state,
        columns: [
          ...state.columns.slice(0, leftIndex),
          {
            id: leftId,
            label: "Column",
            accessor: leftId,
            dataType: "text",
            created: action.focus && true,
          },
          ...state.columns.slice(leftIndex, state.columns.length),
        ],
      };
    case "delete_column":
      const deleteIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
      return {
        ...state,
        columns: [
          ...state.columns.slice(0, deleteIndex),
          ...state.columns.slice(deleteIndex + 1, state.columns.length),
        ],
      };
    default:
      return state;
  }
}

export default function Dashboard() {
  const [state, dispatch] = useReducer(reducer, makeData());
  return (
    <div style={{ overflow: "auto", display: "flex" }}>
      <div
        style={{
          flex: "1 1 auto",
          padding: "1rem",
          maxWidth: 1000,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Table columns={state.columns} data={state.data} dispatch={dispatch} />
      </div>
    </div>
  );
}
