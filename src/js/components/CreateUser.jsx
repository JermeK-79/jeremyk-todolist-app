import { postNewUser } from "./fetch";

const CreateUser = (userName, setUserName) => {
    const addNewUser = () => {
        postNewUser(userName);
        setUserName("");
    }
    
    const checkTextBox = () => {
		let textBox = document.querySelector(".new-user");
		if (textBox.value === "") {
			alert("Please add a new user.");
		}
		else {
			addNewUser();
		}

    return (
		<>
			<div className="container mt-5">
				<header className="header text-center">
			<input 
				type="text"
				className="new-user"
				placeholder="Enter user name"
				value={userName}
				onChange={event => setUserName(event.target.value)}
			/>
			<button
				className="add-newuser ms-2 px-4 py-2 fw-semibold text-white bg-gradient rounded-pill shadow-sm border-0"
				onClick={checkTextBox}
			>Add New User</button>
			</header>
			</div>
		</>
	);
};

export default CreateUser;