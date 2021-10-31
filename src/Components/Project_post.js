import React from 'react'
import "../Style/Project_post.css"

function Project_post({id,all_det}) {
    console.log("Prj POst: ", all_det)
  return (
    <div className="Prj_post" >
        <div className="prj_img">
            <img src={all_det.image} alt="img" />
        </div>
        <div className="prj_info">
            <div className="prj_name">
                <h2>{all_det.ProjectName}</h2>
            </div>
            <div className="prj_desc">
                <p>{all_det.ProjectDesc.substring(0,200)}...</p>
            </div>
            <div className="prj_details">
                <div className="prj_dates">
                    <p>Start : {all_det.Startdateref}</p>
                    <p>End : {all_det.Enddateref}</p>
                </div>
                <div className="prj_links">
                    <a href={all_det.ProjectWebLink}>View</a>
                    <a href={all_det.GitHubLink}>Source Code</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project_post
