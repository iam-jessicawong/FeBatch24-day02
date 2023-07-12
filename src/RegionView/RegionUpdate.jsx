import React, { useState } from "react";
import RegionApi from "../api/RegionApi";

export default function RegionUpdate(props) {
  const [value, setValue] = useState({
    name: props.updateData.regionName || "",
  });
  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      name: value.name,
    };
    await RegionApi.update(props.updateData.regionId, payload).then(() => {
      props.setRefresh(true);
      window.alert("Data success update");
    });
  };
  return (
    <div>
      <h2>Update Region</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Region Name :</label>
          <input
            type="text"
            placeholder="Name"
            value={value.name}
            onChange={handleChange("name")}
          ></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setUpdate(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
}
