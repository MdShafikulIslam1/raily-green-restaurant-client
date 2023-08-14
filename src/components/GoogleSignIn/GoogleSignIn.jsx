import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const GoogleSignIn = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    const result = await googleSignIn();
    const user = await result.user;

    const saveUserData = { name: user.displayName, email: user.email };
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveUserData),
    });

    const responseData = await response.json();

    if (responseData) {
      Swal.fire("yes!,you can done to signIn with google");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center h-12 items-center mb-6 ">
      <button onClick={handleGoogleSignIn}>
        <FcGoogle className="w-12 h-12" />
      </button>
    </div>
  );
};

export default GoogleSignIn;
