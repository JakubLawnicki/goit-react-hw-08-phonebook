export const Login = () => {
  return (
    <div>
      <form>
        <label>
          E-mail
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>

        <button type="submit"> Login</button>
      </form>
    </div>
  );
};
