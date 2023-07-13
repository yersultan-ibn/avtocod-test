import { Box, Button, Modal, Typography } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const style = {
 
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email format")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
});

export const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (values: any, { setSubmitting }: any) => {
    // Здесь можно вызвать action creator login и передать значения username и password
    console.log(values.username, values.password);
    setSubmitting(false);
  };

  return (
    <>
      <Box sx={style} className="login-page">
        <Typography variant="h6" component="div" className="login-page-title">
          Авторизация
        </Typography>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="form-input form-username">
                <label htmlFor="username">Логин</label>
                <Field type="text" id="username" name="username" />
                <ErrorMessage name="username" component="div" />
              </div>
              <div className="form-input form-password">
                <label htmlFor="password">Пароль</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Войти
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
