// Logic

const logic = new Logic

// React

const root = ReactDOM.createRoot(document.getElementById('root'))


function Login() {
    return <div id="login-view" class="view">
        <h1>Login</h1>

        <form class="form">
            <label for="email-input">E-mail</label>
            <input id="email-input" type="email" />

            <label for="password-input">Password</label>
            <input id="password-input" type="password" />

            <button type="submit">Login</button>
        </form>

        <a href="">Register</a>
    </div>
}

root.render(<Login />)