import React from 'react';

const AddUser = (props) => {
  return (
    <form onSubmit={(event) => props.addUser(event)}>
      <div className="field">
        <input
          name="username"
          className="input is-large"
          type="text"
          placeholder="Username"
          required
          value={props.username}
          onChange={props.handleChange}
        />
      </div>
      <div className="field">
        <input
          name="email"
          className="input is-large"
          type="email"
          placeholder="Email address"
          required
          value={props.email}
          onChange={props.handleChange}
        />
      </div>
      <textarea class="textarea is-danger"
        name="codesnippet"
        className="textarea is-large"
        placeholder="Code snippet"
        rows="10"
        required>
      </textarea>
      <input
        type="submit"
        className="button is-danger is-large is-halfwidth"
        value="Add Trap Coder"
      />
    </form>
  )
};

export default AddUser;
