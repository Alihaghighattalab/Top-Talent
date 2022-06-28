import React from 'react'

export default function PublicRepoItems(props) {
    return (
        <>
            <tr key={props.id}>
                <td>
                    <p className="fw-bold mb-1">{props.name}</p>
                </td>
                <td>
                    <span className="badge bg-success">Public</span>
                </td>
                <td>
                    <span className="badge bg-success">{props.fork}</span>
                </td>
                <td>
                    <span className="badge bg-success">{props.star}</span>
                </td>
                <td>
                    <a href={props.url} className='text-decoration-none'>GO</a>
                </td>
                <td>
                <p className="fw-bold mb-1">{props.update}</p>
                </td>
            </tr>
        </>
    )
}
