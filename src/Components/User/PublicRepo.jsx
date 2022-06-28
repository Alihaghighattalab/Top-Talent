import React from 'react'
import PublicRepoItems from './PublicRepoItems'

export default function PublicRepo(props) {

const trItems = props.repoInfo.map((repo,index)=>{
    return <PublicRepoItems key={index} name={repo.name} url={repo.html_url} update={repo.updated_at} fork={repo.forks_count} star={repo.stargazers_count}/>
})

    return (
        <>
            <div className='container w-100 mr-2 ml-2'>
                <table className="table table-striped">
                    <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Fork</th>
                            <th>Star</th>
                            <th>URL</th>
                            <th>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trItems}
                    </tbody>
                </table>
            </div>
        </>
    )
}
