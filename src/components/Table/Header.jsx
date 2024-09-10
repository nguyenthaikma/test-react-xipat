import React, { useEffect, useState } from "react";
import { shortId } from "./utils";

export default function Header({
  column: { id, created, label, getHeaderProps },
  dataDispatch,
}) {
  const [expanded, setExpanded] = useState(created || false);
  const [inputRef, setInputRef] = useState(null);
  const [header, setHeader] = useState(label);
  const buttons = [
    {
      onClick: (e) => {
        dataDispatch({
          type: "update_column_header",
          columnId: id,
          label: header,
        });
        dataDispatch({ type: "delete_column", columnId: id });
        setExpanded(false);
      },
      label: "Delete",
    },
  ];

  useEffect(() => {
    if (created) {
      setExpanded(true);
    }
  }, [created]);

  useEffect(() => {
    setHeader(label);
  }, [label]);

  useEffect(() => {
    if (inputRef) {
      inputRef.focus();
      inputRef.select();
    }
  }, [inputRef]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      dataDispatch({
        type: "update_column_header",
        columnId: id,
        label: header,
      });
      setExpanded(false);
    }
  }

  function handleChange(e) {
    setHeader(e.target.value);
  }

  function handleBlur(e) {
    e.preventDefault();
    dataDispatch({ type: "update_column_header", columnId: id, label: header });
  }

  return id !== 999999 ? (
    <>
      <div
        {...getHeaderProps({ style: { display: "inline-block" } })}
        className="th noselect"
      >
        <div className="th-content" onClick={() => setExpanded(true)}>
          {label}
        </div>

        {expanded && (
          <div style={{ zIndex: 3, position: "absolute" }}>
            <div
              className="bg-white shadow-5 border-radius-md"
              style={{
                width: 240,
              }}
            >
              <div
                style={{
                  paddingTop: "0.75rem",
                  paddingLeft: "0.75rem",
                  paddingRight: "0.75rem",
                }}
              >
                <div className="is-fullwidth" style={{ marginBottom: 12 }}>
                  <input
                    className="form-input"
                    ref={setInputRef}
                    type="text"
                    value={header}
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
              <div
                key={shortId()}
                style={{
                  borderTop: `2px solid #cc`,
                  padding: "4px 0px",
                }}
              >
                {buttons.map((button) => (
                  <button
                    type="button"
                    className="sort-button"
                    onMouseDown={button.onClick}
                  >
                    <span className="svg-icon svg-text icon-margin">
                      {button.icon}
                    </span>
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        {expanded && (
          <div className="overlay" onClick={() => setExpanded(false)} />
        )}
      </div>
    </>
  ) : (
    <div
      {...getHeaderProps({ style: { display: "inline-block" } })}
      className="th noselect"
    >
      <div
        className="th-content"
        style={{ display: "flex", justifyContent: "center" }}
        onClick={(e) =>
          dataDispatch({
            type: "add_column_to_left",
            columnId: 999999,
            focus: true,
          })
        }
      >
        <span className="svg-icon-sm svg-gray">
          <>+</>
        </span>
      </div>
    </div>
  );
}
