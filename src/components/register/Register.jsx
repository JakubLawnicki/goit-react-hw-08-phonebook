export const Register = () => {
  return (
    <div>
      <h2>Create an account</h2>
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          E-mail
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
