import DocViewer from "react-doc-viewer";

const ViewFile = () => {
  const docs = [
    { uri: "http://13.127.222.180:3021/uploads/imageUploads/992196.docx" },
    // { uri: require("./example-files/pdf.pdf") }, // Local File
  ];
  return (
    <>
      <DocViewer documents={docs} />
    </>
  );
};

export default ViewFile;
