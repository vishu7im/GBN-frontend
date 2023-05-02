import React from "react";

import "./upload.css";
export default function Upload() {
  return (
    <div className="upload_box">
      <div className="form">
        <input type="file" multiple />
        <p>Drag your files here or click in this area.</p>
        <div className="w-full flex justify-center ">
          <button type="submit">Upload</button>
        </div>
      </div>
    </div>
  );
}
