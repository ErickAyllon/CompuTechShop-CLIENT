import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "./UpdateForm.module.css";

const UpdateForm = ({
  handleChange,
  handleSubmit,
  isSubmitting,
  values,
  errors,
}) => {
  return (
    <div>
      <Box
        className={styles.form}
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "45ch",
            color: "white",
            display: "flex",
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <h3 style={{ textAlign: "center" }}>Update User:</h3>

          <TextField
            variant="filled"
            id="outlined-required"
            label="First Name"
            name="given_name"
            defaultValue={values.given_name}
            required
            disabled
          />

          <TextField
            variant="filled"
            id="outlined-required"
            label="Last Name"
            name="family_name"
            defaultValue={values.family_name}
            required
            disabled
          />

          <TextField
            variant="filled"
            id="outlined-required"
            label="E-mail"
            name="email"
            defaultValue={values.email}
            required
            disabled
          />

          <TextField
            variant="filled"
            id="outlined-required"
            label="Nickname"
            name="nickname"
            defaultValue={values.nickname}
            required
            disabled
            hidden
          />

          <TextField
            variant="filled"
            id="outlined-required"
            name="email_verified"
            value={values.email_verified}
            required
            disabled
            hidden
          />

          <TextField
            variant="filled"
            id="outlined-required"
            label="Picture"
            name="picture"
            onChange={handleChange}
            defaultValue={values.picture}
            error={errors.picture ? true : false}
            helperText={errors.picture}
            required
          />

          <TextField
            variant="filled"
            id="outlined-required"
            label="Address"
            name="address"
            onChange={handleChange}
            value={values.address}
            error={errors.address ? true : false}
            helperText={errors.address}
            required
          />

          <TextField
            variant="filled"
            id="outlined-required"
            label="Phone"
            name="phone"
            onChange={handleChange}
            value={values.phone}
            error={errors.phone ? true : false}
            helperText={errors.phone}
            required
          />

          <TextField
            sx={{ "& > :not(style)": { m: 0.1, height: "8ch" } }}
            type="date"
            variant="filled"
            id="outlined-required"
            label="Birthdate"
            name="birthday"
            value={values.birthday}
            required
            disabled
          />

          <div className={styles.createButton}>
            <Button disabled={isSubmitting} type="submit" variant="outlined">
              Update User
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default UpdateForm;
