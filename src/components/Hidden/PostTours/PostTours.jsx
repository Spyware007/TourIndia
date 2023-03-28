import React, { useState } from "react";
import classes from "./PostTours.module.css";
import { Button, Card, Input, Textarea } from "../../common";
import http from "../../../api";
import Swal from "sweetalert2";

const PostTours = () => {
  const [img, setImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [tour, setTour] = useState({
    location: "",
    description: "",
    tags: "",
    category: "",
  });

  const { location, description, tags, category } = tour;

  const onChangeHandler = (e) => {
    setTour({
      ...tour,
      [e.target.name]: e.target.value,
    });
  };

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImgPreview(URL.createObjectURL(file));
    setImg(e.target.files);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (tags === "" || location === "" || description === "") {
      // AlertContext.setAlert("Please enter all fields", "danger"); add a state
      alert("Please fill all  the fields");
    } else {
      const dataArray = new FormData();
      dataArray.append("tags", tags);
      dataArray.append("location", location);
      dataArray.append("description", description);
      dataArray.append("category", category);
      dataArray.append("image", img["0"], img["0"].name);
      try {
        http.post("/tour/createTour", dataArray).then(
          () => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Tour Created Succesfully",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error,
            });
          }
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      }
    }
    setTour({
      tags: "",
      location: "",
      description: "",
      category: "",
    });
    setImg(null);
    setImgPreview(null);
  };

  const deleteAllJobs = async () => {
    try {
      http.delete("/tour/deleteTours");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "All tours are deleted",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unable to delete the tours",
        text: error,
      });
    }
  };

  return (
    <>
      <h2 className={classes.heading}>Post a Tour</h2>
      <Button label="Delete All Tours" onClick={deleteAllJobs} />

      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          onChange={onChangeHandler}
          type="text"
          value={tags}
          label="Tags"
          name="tags"
          required
        />
        <Input
          onChange={onChangeHandler}
          type="text"
          value={location}
          label="location"
          name="location"
          required
        />

        <Textarea
          onChange={onChangeHandler}
          type="text"
          value={description}
          label="Description"
          name="description"
          required
        />

        <input
          className={classes.custom_file_input}
          type="file"
          onChange={onImageChange}
          // name="image"
        />
        <Button label="Create" />
      </form>
      <Card data={tour} show="true" imgPreview={imgPreview} />
    </>
  );
};

export default PostTours;
