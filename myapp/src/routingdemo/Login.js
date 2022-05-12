function Login() {
    return(
        <div>
            <div className="container">
                Welcome to Login page
                <div class="mb-3">
                <label for="Name" class="form-label">Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter name"/>
                </div>
            <div class="mb-3">
                <label for="Password" class="form-label">Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput2"/>
        </div>
        <button type="button" class="btn btn-outline-success">Login</button>
        </div>
            
        </div>
    )  
}
export default Login