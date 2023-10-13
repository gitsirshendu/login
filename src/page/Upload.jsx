import React, { useState } from "react";

function Upload() {
	const [file, setFile] = useState([]);
	const [uploadData,setUploadData]=useState()
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
		// setFileName(e.target.files[0].name)
		for(let i=0;i<e.target.files.length;i++){
			setFile({...file,file:e.target.files[i]})
		}
		
	}

	console.log(file);

	const handleUpload=()=>{

	}

	return (
		<div className="App">
			<h2>Add Image:</h2>
			<input type="file" onChange={handleChange} multiple />
			<img src={file} className="img-fluid" style={{width:'100px'}} />
			<button type="button" onClick={handleUpload}>Upload</button>
		</div>

	);
}

export default Upload;
