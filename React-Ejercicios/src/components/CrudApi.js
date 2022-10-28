import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [datatoEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]); 

  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    helpHttp()
      .post(url, options)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb(...db, res);
        } else {
          setError(res);
        }
      });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    helpHttp()
      .put(endpoint, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.map((el)=>(el.id === data.id?data:el))
          setDb(newData);
        } else {
          setError(res);
        }
      });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el ${id}?`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`
      let options = {
        headers: { "content-type": "application/json" },
      };
      helpHttp().del(endpoint,options).then(res =>{
        if (!res.err) {
          let newData = db.filter((el)=>el.id !== id)
          setDb(newData);
        } else {
          setError(res);
        }
      })
    }
  };

  return (
    <div>
      <div>CrudAppi</div>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          datatoEdit={datatoEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
