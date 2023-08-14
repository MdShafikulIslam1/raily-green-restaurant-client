import { useForm } from "react-hook-form";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
const imageKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const imagePostUrl = `https://api.imgbb.com/1/upload?key=${imageKey}`;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    // fetch(imagePostUrl, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imageResponse) => {
    //     if (imageResponse.success) {
    //       const { name, recipe, price, category } = data;
    //       const newMenuItem = {
    //         name,
    //         recipe,
    //         price,
    //         category,
    //         image: imageResponse.data.display_url,
    //       };

    //     }
    //   });

    const res = await fetch(imagePostUrl, {
      method: "POST",
      body: formData,
    });
    const imageResponse = await res.json();
    if (imageResponse.success) {
      const { name, recipe, price, category } = data;
      const newMenuItem = {
        name,
        recipe,
        price,
        category,
        image: imageResponse.data.display_url,
      };
      const res = await axiosSecure.post("/menu", newMenuItem);
      if (res.data.insertedId) {
        reset();
        Swal.fire("Successfully Added a item");
      }
    }
  };
  return (
    <div className="w-full px-12">
      <SectionTitle
        subHeading={"What's New"}
        heading={"Add an Item"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors?.name && (
            <span className="text-red-600">Item name field is Required</span>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full "
          >
            <option>Pizza</option>
            <option>Salad</option>
            <option>Drinks</option>
            <option>Desert</option>
            <option>Soup</option>
          </select>
          {errors?.category && (
            <span className="text-red-600">
              Item category field is Required
            </span>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price*</span>
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Enter food Price"
            className="input input-bordered w-full "
          />
          {errors?.price && (
            <span className="text-red-600">Items Price is Required</span>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered w-full h-24"
            placeholder="Bio"
          ></textarea>
          {errors?.details && (
            <span className="text-red-600">Details field is Required</span>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
          {errors?.image && (
            <span className="text-red-600">Item image is Required</span>
          )}
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn btn-active btn-secondary"
        />
      </form>
    </div>
  );
};

export default AddItem;
