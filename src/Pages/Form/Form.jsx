import { Box, MenuItem, Stack, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireBase";
import LoadingButton from "@mui/lab/LoadingButton";
import Header from "../../Components/Header";
import { useState } from "react";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submited, setSubmited] = useState(false);
  const usersCollection = collection(db, "users");
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await addDoc(usersCollection, data)
        .then(() => {
          console.log("added user successfully");
          setSubmited(true);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setSubmited(false);
      }, 2000);
    }
  };

  const data = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manger",
      label: "Manger",
    },
    {
      value: "User",
      label: "User",
    },
  ];

  const emailRegax =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegax =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      {submited && (
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Alert
            sx={{
              display: "flex",
              justifyContent: "end",
              width: "fit-content",
            }}
          >
            <AlertTitle severity="success">
              {" "}
              added New user successfully
            </AlertTitle>
          </Alert>
        </Box>
      )}
      <Stack direction={"row"} sx={{ gap: 2, width: "100%" }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName) && "this field is required & min is 3"
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flexGrow: 1 }}
          label="First Name "
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName) && "this field is required & min is 3"
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flexGrow: 1 }}
          label="Last Name "
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) && "enter a vaild email like loay@example.com"
        }
        {...register("email", {
          required: true,
          minLength: 3,
          pattern: emailRegax,
        })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.phone)}
        helperText={Boolean(errors.phone) && "Enter a vaild phone number "}
        {...register("phone", {
          required: true,
          minLength: 3,
          pattern: phoneRegax,
        })}
        label="Contact Number"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.adderss)}
        helperText={
          Boolean(errors.adderss) && "Enter a vaild  adderess & min is 5  "
        }
        {...register("adderss", {
          required: true,
          minLength: 5,
        })}
        label="Address "
        variant="filled"
      />

      <TextField
        error={Boolean(errors.role)}
        helperText={Boolean(errors.role) && "Enter a vaild  role   "}
        {...register("role", {
          required: true,
        })}
        select
        variant="filled"
        label="Role"
        defaultValue="User"
      >
        {data.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      {/* <input type="file" {...register("file")} /> */}
      <Box component={"div"} sx={{ display: "flex", justifyContent: "end" }}>
        <LoadingButton
          type="submit"
          loading={isSubmitting}
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default Form;
