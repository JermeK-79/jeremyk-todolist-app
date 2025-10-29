import { postNewUser } from "./fetch";

const CreateUser = ({ userName, setuserName, setCurrentUser }) => {
    
    const addNewUser = async () => {
        if (userName.trim() === "") {
            alert("Please add a new user.");
            return;
        }
        
        try {
            await postNewUser(userName, setCurrentUser);
            setuserName("");
        } catch (error) {
            console.error("Failed to create user:", error);
            alert("Failed to create user. User may already exist.");
        }
    }

    return (
        <div className="user-input mt-3 d-flex justify-content-center">
            <input 
                type="text"
                className="new-user"
                placeholder="Enter user name"
                value={userName}
                onChange={(event) => setuserName(event.target.value)}
            />
            <button
                className="add-newuser ms-2 px-4 py-2 fw-semibold text-white bg-success rounded-pill shadow-sm border-0"
                onClick={addNewUser}
            >
                Add New User
            </button>
        </div>
    );
};

export default CreateUser;