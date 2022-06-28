import React from 'react'

export default function ProfileInfo(props) {
    return (
        <>
            <div className="container py-5 h-100 w-100">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="card" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-4">
                                <div className="d-flex text-black">
                                    <div className="flex-shrink-0">
                                        <img src={props.userInfo.avatar_url}
                                            alt="avatar" className="img-fluid rounded-circle"
                                            style={{ width: '180px', borderRadius: '10px' }} />
                                    </div>
                                    <div className="flex-grow-1 ms-3 w-25">
                                        <h5 className="mb-1">{props.userInfo.name}</h5>
                                        <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>{props.userInfo.bio}</p>
                                        <div className="d-flex justify-content-around rounded-3 p-2 mb-2"
                                            style={{ backgroundColor: '#efefef' }}>
                                            <div>
                                                <p className="small text-muted mb-1">Public Repo</p>
                                                <p className="mb-0 text-center">{props.userInfo.public_repos}</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="small text-muted mb-1">Followers</p>
                                                <p className="mb-0  text-center">{props.userInfo.followers}</p>
                                            </div>
                                            <div>
                                                <p className="small text-muted mb-1">Following</p>
                                                <p className="mb-0  text-center">{props.userInfo.following}</p>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-start rounded-3">
                                            <a href={props.userInfo.html_url} className="w-100">
                                                <button type="button" className="btn btn-outline-primary me-1 flex-grow-1 w-100">GO</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}