import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

import "./AddTours.css";
import { AddLocationAlt, Image } from "@mui/icons-material";

//validation
const validationSchema = Yup.object().shape({
  location: Yup.string().required("location is required"),
  price: Yup.number()
    .typeError("Amount must be a number")
    .required("price is required")
    .positive("price should be positive")
    .integer("must be integer"), //yup.number().required().positive().integer(),
  title: Yup.string()
    .required("title is required")
    .min(6, "title must be at least 6 characters")
    .max(100, "title must not exceed 100 characters"),
  image: Yup.string().required("image is required").url("must be valid URL"),
  description: Yup.string()
    .required("description is required")
    .min(6, "description must be at least 6 characters")
    .max(350, "description must not exceed 350 characters"),

  acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
});

const AddTours = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data) => {
    axios
      .post("https://shrieking-skeleton-21491.herokuapp.com/tour", data)
      .then((res) => {
        //  console.log(res);
        if (res.data.insertedId) {
          alert("added succeccfully");
          reset();
        }
      });

    console.log(data);
  };

  return (
    <div className="register-form text-start">
      <h1 className="mt-4 text-center">Add New Tours</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mt-4">
          <label for="location">Location</label>
          <div className="input-group">
            <span className="input-group-addon border">
              <AddLocationAlt fontSize="large" color="primary" />
            </span>
            <input
              id="location"
              name="location"
              defaultValue="Bangladesh"
              type="text"
              {...register("location")}
              className={`form-control ${errors.location ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.location?.message}</div>
          </div>
        </div>

        <div className="form-group ">
          <label>Title</label>
          <input
            name="title"
            type="text"
            {...register("title")}
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.title?.message}</div>
        </div>

        <div className="row g-2 form-group">
          <span className="input-group-addon">Package Types</span>
          <div className="col-3">
            <input
              name="price"
              {...register("price")}
              //   type="text"
              className={`form-control ${errors.price ? "is-invalid" : ""}`}
              placeholder="Price $"
            />
            <div className="invalid-feedback">{errors.price?.message}</div>
          </div>

          <div className="col-3 form-group">
            <select className="form-select" name="days" {...register("days")}>
              <option>1 Day</option>
              <option>2 Days</option>
              <option>3 Days</option>
              <option>4 Days</option>
              <option>5 Days</option>
              <option>6 Days</option>
              <option>7 Days</option>
            </select>
          </div>
          <div className="col-6 form-group">
            <select
              className="form-select"
              name="category"
              {...register("category")}
            >
              <option>Family Tour</option>
              <option>Private Tour</option>
              <option>Guided Tour</option>
              <option>River Cruise</option>
              <option>Religious Tour</option>
              <option>Cultural Tour</option>
              <option>Adventure Tourism Package</option>
              <option>Wildlife Tourism Package</option>
              <option>Eco Tourism Package</option>
            </select>
          </div>
        </div>

        <label className="input-group-addon">Image URL:</label>

        <div className="input-group align-items-center">
          <span className="input-group-addon border">
            <Image fontSize="large" color="primary" />
          </span>
          <input
            name="Image URL"
            {...register("image")}
            //   type="text"
            className={`form-control ${errors.image ? "is-invalid" : ""}`}
            placeholder="image"
          />
          <div className="invalid-feedback">{errors.image?.message}</div>
        </div>

        <div className="form-group py-3">
          <span className="input-group-addon">Description</span>
          <textarea
            id="description"
            rows="5"
            name="description"
            {...register("description")}
            className={`form-control textArea ${
              errors.description ? "is-invalid" : ""
            }`}
          ></textarea>

          <div className="invalid-feedback">{errors.description?.message}</div>
        </div>

        <div className="form-group form-check">
          <input
            name="acceptTerms"
            type="checkbox"
            {...register("acceptTerms")}
            className={`form-check-input ${
              errors.acceptTerms ? "is-invalid" : ""
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            Provided data is correct
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary m-2">
            Add To Database
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>

      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg m-auto"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Title
            </label>

            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="title"
              {...register("title", { required: true })}
            />

            <ErrorMessage
              errors={errors}
              name="title"
              render={() => (
                <p className="bg-red-500 text-white text-xs italic">
                  Please fill out this field.
                </p>
              )}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Subtitle
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="subtitle"
              {...register("subtitle", { required: true })}
            />
            <ErrorMessage
              errors={errors}
              name="subtitle"
              render={() => (
                <p className="bg-red-500 text-white text-xs italic">
                  Please fill out this field.
                </p>
              )}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              View
            </label>
            <div className="relative">
              <select
                {...register("view", { required: true })}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="Ocean View">Ocean View</option>
                <option value="Palm View">Palm View</option>
                <option value="Elevated Ocean View">Elevated Ocean View</option>
                <option value="Elevated Palm Jumeirah View">
                  Elevated Palm Jumeirah View
                </option>
                <option value="Dubai Cityscape or Ocean View">
                  Dubai Cityscape or Ocean View
                </option>
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Bed Type
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="bed"
              {...register("bed", {
                required: "This field is required",
                maxLength: { value: 15, message: "Cant exceed 15 characters" },
              })}
            />

            {errors.bed ? (
              <>
                {errors.bed.type === "required" && (
                  <p
                    className=" text-xs italic"
                    style={{ background: "red", color: "white" }}
                  >
                    {errors.bed.message}
                  </p>
                )}
                {errors.bed.type === "maxLength" && (
                  <p
                    className=" text-xs italic"
                    style={{ background: "orange", color: "white" }}
                  >
                    {errors.bed.message}
                  </p>
                )}
              </>
            ) : null}
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Room Size
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              placeholder="size"
              {...register("size", { required: true, valueAsNumber: true })}
            />

            <ErrorMessage
              errors={errors}
              name="subtitle"
              render={() => (
                <p className="bg-red-500 text-white text-xs italic">
                  Please fill out this field.
                </p>
              )}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Occupency
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              placeholder="0"
              {...register("occupency", {
                required: "This field is required",
                valueAsNumber: true,
                min: 0,
                max: { value: 12, message: "Maximum capacity 12" },
              })}
            />

            {errors.occupency ? (
              <>
                {errors.occupency.type === "required" && (
                  <p
                    className=" text-xs italic"
                    style={{ background: "red", color: "white" }}
                  >
                    {errors.occupency.message}
                  </p>
                )}
                {errors.occupency.type === "max" && (
                  <p
                    className=" text-xs italic"
                    style={{ background: "orange", color: "white" }}
                  >
                    {errors.occupency.message}
                  </p>
                )}
              </>
            ) : null}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              placeholder="bdt"
              {...register("bdt", { required: true, valueAsNumber: true })}
            />
            <ErrorMessage
              errors={errors}
              name="bdt"
              render={() => (
                <p className="bg-red-500 text-white text-xs italic">
                  Please fill out this field.
                </p>
              )}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Image Url
            </label>

            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="url"
              placeholder="image"
              {...register("image", { required: true })}
            />
            <ErrorMessage
              errors={errors}
              name="image"
              render={() => (
                <p className="bg-red-500 text-white text-xs italic">
                  Please fill out this field.
                </p>
              )}
            />
            <p className="text-gray-600 text-xs italic">Provide valid url</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Room Info
            </label>

            <textarea
              {...register("info", { required: true })}
              rows={3}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-lg border border-gray-300 rounded-md"
            />
            <ErrorMessage
              errors={errors}
              name="info"
              render={() => (
                <p className="bg-red-500 text-white text-xs italic">
                  Please fill out this field.
                </p>
              )}
            />
          </div>
        </div>

        <input type="submit" />
      </form> */}
    </div>
  );
};

export default AddTours;
