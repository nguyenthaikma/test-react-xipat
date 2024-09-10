import React, { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";

export default function Cell({
  value: initialValue,
  row: { index, original: row },
  column: { id, dataType },
  dataDispatch,
}) {
  const [value, setValue] = useState({ value: initialValue, update: false });
  const onChange = (e) => {
    setValue({ value: e.target.value, update: false });
  };

  useEffect(() => {
    setValue({ value: initialValue, update: false });
  }, [initialValue]);

  useEffect(() => {
    if (value.update) {
      dataDispatch({
        type: "update_cell",
        columnId: id,
        rowIndex: index,
        value: value.value,
      });
    }
  }, [value, dataDispatch, id, index]);

  let element;
  switch (dataType) {
    case "text":
      element = (
        <ContentEditable
          html={(value.value && value.value.toString()) || ""}
          onChange={onChange}
          onBlur={() => setValue((old) => ({ value: old.value, update: true }))}
          className="data-input"
        />
      );
      break;
    case "number":
      element = (
        <ContentEditable
          html={(value.value && value.value.toString()) || ""}
          onChange={onChange}
          onBlur={() => setValue((old) => ({ value: old.value, update: true }))}
          className="data-input text-align-right"
        />
      );
      break;
    case "action":
      element = (
        <button
          onClick={() =>
            dataDispatch({
              type: "delete_row",
              rowId: row.ID,
            })
          }
        >
          -
        </button>
      );
      break;
    default:
      element = <span></span>;
      break;
  }

  return element;
}
