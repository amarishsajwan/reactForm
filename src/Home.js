import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("name : ", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginForm = (e) => {
    e.preventDefault();
    axios
      .post("https://api.dev.healthtechgateway.com/login", formData)
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   useEffect(() => {
  //     console.log("formData : ", formData);
  //     if (formData.email.length && formData.password.length) {
  //       handleLoginForm(formData);
  //     }
  //   }, [formData]);

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h1">Login Form</Typography>
          <form onSubmit={handleLoginForm}>
            <Grid container spacing={2} mt={5}>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
