function Register() {
    return(
        <div>
        <div className="container">
            <div class="mb-3">
                <label for="Name" class="form-label">Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter name"/>
                </div>
                <div class="mb-3">
                <label for="Password" class="form-label">Password</label>
                <input type="Password" class="form-control" id="formGroupExampleInput" placeholder="enter password"/>
                </div>
                <div class="mb-3">
                <label for="Email" class="form-label">Email</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter email"/>
                </div>
                <div class="mb-3">
                <label for="City" class="form-label">City</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter city"/>
                </div>
                <div class="mb-3">
                <button type="button" class="btn btn-outline-success">Register</button>
                </div>
        </div>
        </div>
    )
}
export default Register