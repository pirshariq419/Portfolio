import React from "react";
import experience from './data/experience.json';

const Experience = () => {
    return (
        <>
            <div className="container ex" id="education">
                <h1 className="section-title">Education</h1>
                {
                    experience.map((data)=>{
                        return(
                            <div key={data.id} className="ex-items glass-panel"
                            data-aos="zoom-in"
                            data-aos-duration="1000">
                                <div className="left">
                                    <img src={`${data.imageSrc}`} alt="company" />
                                </div>
                                <div className="right">
                                    <h2>{data.role}</h2>
                                    <h4>
                                        <span className="text-accent">
                                            {data.startDate}
                                            <br/>
                                            <span>{data.location} </span>
                                        </span>
                                    </h4>
                                    <h5>{data.experiences[0]}</h5>
                                    <h5>{data.experiences[1]}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Experience;