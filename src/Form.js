import React, { useState } from "react";

const Form = props => {
const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
});

const handleChanges = event => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addMember(member);
    setMember({ name: "", email: "", role: "" });
  };

    return (
    <div>
    <form onSubmit={submitForm}>
        <label htmlFor="name">Members' Name</label>
        <br />
        <input
        type="text"
        id="name"
        placeholder="First Name and Last Name"
        name="name"
        value={member.name}
        onChange={handleChanges}
        required
        />
        <br />
        <label htmlFor="email">Members' Email</label>
        <br />
        <input
        type="email"
        id="email"
        placeholder="Email Address"
        name="email"
        value={member.email}
        onChange={handleChanges}
        required
        />
        <br />
        <label htmlFor="role">Members' Role</label>
        <br />
        <input 
        type="text"
        id="role"
        placeholder="Role"
        name="role"
        value={member.role}
        onChange={handleChanges}
        required
    />
    <br />
    <label htmlFor="addMember">Add Member </label>
        <button type="submit" id="addMember">
          Submit
        </button>
      </form>
    </div>
);
}

export default Form;