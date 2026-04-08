import React, { useState } from "react";
import certifications from "./data/certifications.json";
import { HiX, HiDownload } from "react-icons/hi";

const Certifications = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleDownload = (imgSrc, title) => {
    const link = document.createElement("a");
    link.href = `/assets/${imgSrc}`;
    link.download = `${title.replace(/\s+/g, "_")}_Certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container my-5" id="certifications">
      <h1 className="section-title">CERTIFICATIONS</h1>
      <div className="row-grid">
        {certifications.map((data) => (
          <div
            key={data.id}
            className="project-card glass-panel"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div 
              className="p-3 d-flex justify-content-center" 
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedImg(data)}
            >
              <img
                src={`/assets/${data.imageSrc}`}
                className="img-fluid"
                alt={data.title}
                style={{
                  height: "150px",
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
            <div className="project-card-body text-center">
              <h5 className="project-card-title">{data.title}</h5>
              <p className="project-card-text">
                <span className="text-accent">{data.organization}</span>
                <br />
                <span className="small text-secondary">{data.date}</span>
              </p>
              <div className="project-card-actions" style={{ flexDirection: "column", gap: "10px" }}>
                <a
                  href={data.link}
                  className="btn-primary-custom"
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: "100%" }}
                >
                  Verify Online
                </a>
                <button
                  onClick={() => handleDownload(data.imageSrc, data.title)}
                  className="btn-secondary-custom"
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  <HiDownload /> Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImg(null)}>
              <HiX />
            </button>
            <img 
              src={`/assets/${selectedImg.imageSrc}`} 
              alt={selectedImg.title} 
              className="modal-img" 
            />
            <div className="modal-actions">
              <button 
                className="btn-primary-custom"
                onClick={() => handleDownload(selectedImg.imageSrc, selectedImg.title)}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <HiDownload /> Download Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
