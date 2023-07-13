import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateRegionRequest } from "../ReduxSaga/Action/RegionAction";

export default function FormikSagaRegionUpdate(props) {
  const dispatch = useDispatch();
  const { region } = props.update;

  const formik = useFormik({
    initialValues: {
      name: region.regionName || undefined,
    },
    onSubmit: async (values) => {
      let formData = new FormData();
      formData.append("name", values.name);
      const payload = {
        name: formData.get("name"),
      };
      dispatch(UpdateRegionRequest({ id: region.regionId, payload }));
      props.setUpdate({ ...props.update, open: false });
      window.alert("Data Successfully Updated");
      props.setRefresh(true);
    },
  });

  return (
    <div>
      <div>
        <label>Region Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <button type="submit" onClick={formik.handleSubmit}>
          Simpan
        </button>
        <button type="submit" onClick={() => props.setUpdate({ open: false })}>
          Cancel
        </button>
      </div>
    </div>
  );
}
