import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = async (user) => {
    const res = await fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    });
    const data = await res.json();
    if (data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is Admin now`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handelDeleteUser = async (user) => {
    const res = await fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is successfully deleted`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === "admin" ? (
                  "admin"
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost btn-md bg-gray-600 text-white"
                  >
                    <FaUserShield />
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handelDeleteUser(user)}
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
  );
};

export default AllUser;
