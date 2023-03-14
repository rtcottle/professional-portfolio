import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import ResumePDF from '../images/resume.pdf';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

export default function Resume() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div className="px-3">
        <h2>Resume</h2>
        {/* download button */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-file-earmark-arrow-down"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
        </button>
      </div>
      {/* pdf resume  */}
      <div>
        <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="px-3 py-1"
            />
          ))}
        </Document>
        {/* <p>
          Page {pageNumber} of {numPages}
        </p> */}
      </div>
    </div>
  );
}
