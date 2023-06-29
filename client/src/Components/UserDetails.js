import React from 'react'

function UserDetails(props) {
    return (
        <div className="container w-50">
            <h1>{props.instructions}</h1>
            <form action={props.route} method="post">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary" type="submit">{props.button}</button>
            </form>
        </div>
    );
}

export default UserDetails