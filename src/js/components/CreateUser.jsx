import { postNewUser } from "./fetch";

const CreateUser = ({userName, setuserName}) => {
    
    const addNewUser = () => {
        postNewUser(userName);
        setuserName("");
    }
    
    const checkTextBox = () => {
		let textBox = document.querySelector(".new-user");
		if (textBox.value === "") {
			alert("Please add a new user.");
		}
		else {
			addNewUser();
		}
    }

    return (
		<>
			<div className="user-input mt-3 d-flex justify-content-center">
				<input 
					type="text"
					className="new-user"
					placeholder="Enter user name"
					value={userName}
					onChange={event => setuserName(event.target.value)}
				/>
				<button
					className="add-newuser ms-2 px-4 py-2 fw-semibold text-white bg-gradient rounded-pill shadow-sm border-0"
					onClick={checkTextBox}
				>Add New User</button>
			</div>
		</>
	);
};

export default CreateUser;