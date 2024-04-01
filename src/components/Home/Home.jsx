import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);

    return (
        <div>
            <h3 className="text-3xl">Home Page: {authInfo.name}</h3>
        </div>
    );
};

export default Home;