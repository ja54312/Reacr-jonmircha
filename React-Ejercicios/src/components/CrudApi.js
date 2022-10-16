import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [datatoEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id?data:el)
    setDb(newData)
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el ${id}?`)
      if (isDelete) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {
        return;
      }
  };

  return (
    <div>
      <div>CrudApp</div>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          datatoEdit={datatoEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApi;
