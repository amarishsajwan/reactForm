import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Upload = () => {
  const [uploadFormData, SetUploadFormData] = useState({
    name: "",
    description: "",
  });

  const [fileUrl, setFileUrl] = useState("");

  const handleFileUpload = (filesData) => {
    axios
      .post("https://api.dev.healthtechgateway.com/login", filesData)
      .then(function (response) {
        console.log("response", response);
        setFileUrl(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleUploadFile = (e) => {
    e.preventDefault();
    const filesData = new FormData();
    filesData.append("files", e.target);
    if (filesData) {
      handleFileUpload(filesData);
    }
    console.log("data : ", filesData, uploadFormData);
  };

  const handleSubmitForm = () => {
    const data = {
      name: uploadFormData.name,
      description: uploadFormData.description,
      fileUrl: fileUrl,
    };
    axios
      .post("https://api.dev.healthtechgateway.com/login", data)
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (
      fileUrl.length &&
      uploadFormData.name.length &&
      uploadFormData.description.length
    ) {
      handleSubmitForm();
    }
  }, [fileUrl]);

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h1">Upload File</Typography>
          <form onSubmit={handleUploadFile} encType="multipart/form-data">
            <Grid container spacing={2} mt={5}>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  name="name"
                  type="text"
                  label="Name"
                  variant="outlined"
                  value={uploadFormData.name}
                  onChange={(e) =>
                    SetUploadFormData({
                      ...uploadFormData,
                      name: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  name="description"
                  type="text"
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={5}
                  value={uploadFormData.description}
                  onChange={(e) =>
                    SetUploadFormData({
                      ...uploadFormData,
                      description: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField name="files" type="file" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Button type="submit" variant="contained">
                  Upload
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Upload;
