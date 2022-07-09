import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import styles from "./styles.module.scss";

const CheckboxInput = ({ label, ...rest }) => {
  return (
    <FormControlLabel
      className={styles.checkbox_container}
      control={
        <Checkbox
          {...rest}
          style={{ color: "#15883e" }}
          className={styles.checkbox}
        />
      }
      label={label}
    />
  );
};

export default CheckboxInput;
