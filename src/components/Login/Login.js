import "./Login.scss";

export default function Login() {
    async function loginSubmit(){

    }
  return (
    <div className="Login">
      <div id="login-form-container">
          <form onSubmit={loginSubmit} className="login-form">
              <input type="text" name="email" id="" placeholder="id" />
              <input type="password" name="pwd" id="" placeholder="pwd" />
              <input type="submit" value="" />
          </form>
      </div>
      <div id="signup-form-container"></div>
    </div>
  );
}
