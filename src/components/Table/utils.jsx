export function shortId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export default function makeData() {
  let data = [
    { ID: 1, inch: "XS", chest: "31-32", waist: "24-25", hips: "33-34" },
    { ID: 2, inch: "S", chest: "33-34", waist: "26-27", hips: "35-36" },
    { ID: 3, inch: "M", chest: "35-36", waist: "28-29", hips: "37-38" },
    { ID: 4, inch: "L", chest: "37-39", waist: "30-32", hips: "39-41" },
    { ID: 5, inch: "XL", chest: "40-42", waist: "33-35", hips: "42-44" },
    { ID: 6, inch: "XXL", chest: "43-45", waist: "36-38", hips: "45-47" },
  ];

  let columns = [
    {
      id: "inch",
      label: "Inch",
      accessor: "inch",
      width: 30,
      dataType: "text",
    },
    {
      id: "chest",
      label: "Chest",
      accessor: "chest",
      width: 100,
      dataType: "text",
    },
    {
      id: "waist",
      label: "Waist",
      accessor: "waist",
      width: 100,
      dataType: "text",
    },
    {
      id: "hips",
      label: "Hips",
      accessor: "hips",
      width: 100,
      dataType: "text",
    },
    {
      id: 999999,
      width: 20,
      label: "+",
      disableResizing: true,
      dataType: "action",
    },
  ];
  return { columns, data };
}
