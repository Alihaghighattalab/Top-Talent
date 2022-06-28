import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UsernameValue() {
    const [username, setUsername] = useState()
    return (
        <>
            <div className="container mt-auto mb-5">
                <div class="card rounded">
                    <div class="card-header text-center">Insert Username</div>
                    <div class="card-body">
                    <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Username:</label>
                    <input value={username} onChange={e=>setUsername(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
            </form>
                    </div>
                    <div class="card-footer">
                            <Link className='btn btn-outline-primary w-100' to={`${username}`}>Go To Profile</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
