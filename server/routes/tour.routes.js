import express from "express";
import multer from "multer";
import {
  addTour,
  getAllTours,
  getTourById,
  deleteTourById,
  deleteAllTours,
  searchTours,
} from "../controllers/tour.controller.js";

const upload = multer({
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg|jfif|PNG|svg|webp|gif)$/)) {
      return cb(new Error("Please upload valid image format"));
    }
    return cb(undefined, true);
  },
  limits: {
    fileSize: 1000000,
  },
});

const tourRouter = express.Router();

tourRouter.route("/createTour").post(upload.any(), addTour);
tourRouter.route("/getTours").get(getAllTours);
tourRouter.route("/getTours/:key").get(searchTours);
tourRouter.route("/getTour/:id").get(getTourById);
tourRouter.route("/deleteTour/:id").delete(deleteTourById);
tourRouter.route("/deleteTours").delete(deleteAllTours);

export default tourRouter;
