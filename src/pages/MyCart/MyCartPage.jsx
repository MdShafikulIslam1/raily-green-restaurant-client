import Swal from "sweetalert2";
import useGetCart from "../../hooks/useGetCart";
import { FaTrash } from "react-icons/fa";

const MyCartPage = () => {
  const [cart, refetch] = useGetCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handelDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly h-10 font-semibold items-center">
        <h3>Total Items:{cart?.length}</h3>
        <h3>Total Price: $ {`${total.toFixed(2)}`}</h3>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th> Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">$ {item.price}</td>
                  <td>
                    <button
                      onClick={() => handelDeleteItem(item)}
                      className="btn btn-ghost btn-md bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
