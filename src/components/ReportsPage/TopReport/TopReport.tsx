import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   username: Yup.string()
//     .email("Invalid email format")
//     .min(6, "Username must be at least 6 characters")
//     .max(20, "Username must be at most 20 characters")
//     .required("Username is required"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .max(20, "Password must be at most 20 characters")
//     .required("Password is required"),
// });

const identifier = [
  {
    value: "VIN",
    label: "VIN",
  },
  {
    value: "ГРЗ",
    label: "ГРЗ",
  },
  {
    value: "BODY",
    label: "BODY",
  },
];

export const TopReport = () => {
  // const handleFormSubmit = (values: any, { setSubmitting }: any) => {
  //   // Здесь можно вызвать action creator login и передать значения username и password
  //   console.log(values.username, values.password);
  //   setSubmitting(false);
  // };

  return (
    <Box className="top-report">
      <Typography variant="h4" component="h3">
        Создать отчёт
      </Typography>
      <Box component="form" className="form-report">
        <div>
          <label htmlFor="identficator">Идентификатор</label>
          <TextField
            id="outlined-multiline-flexible"
            label="A007AA197"
            className="identifier-input"
          />
        </div>
        <div>
          <label htmlFor="identficator">Тип идентификатора</label>
          <TextField id="outlined-select-currency" select defaultValue="ГРЗ">
            {identifier.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <Button type="submit">Создать</Button>
        </div>
      </Box>
    </Box>
  );
};
