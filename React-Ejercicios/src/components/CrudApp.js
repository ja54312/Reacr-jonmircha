import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDB);
  const [datatoEdit, setDatatoEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {};
  const deleteData = (id) => {};

  return (
    <div>
      <div>CrudApp</div>
      <CrudForm
        createData={createData}
        updateData={updateData}
        datatoEdit={datatoEdit}
        setDatatoEdit={setDatatoEdit}
      />
      <CrudTable
        data={db}
        setDatatoEdit={setDatatoEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
