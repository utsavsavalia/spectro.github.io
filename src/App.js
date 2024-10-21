import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PdfGenerator = () => {
  const contentRef = useRef();
  const location = useLocation();
  const { productName, description, batchNumber, startNumber, endNumber } = location.state || {};

  // const handleDownloadPdf = async () => {
  //   const element = contentRef.current;

  //   // Capture the content of the div as an image using html2canvas
  //   const canvas = await html2canvas(element, {
  //     scale: 2, // Increase resolution for better image quality
  //   });
  //   const imgData = canvas.toDataURL('image/png');

  //   // Create a new PDF document in landscape mode
  //   const pdf = new jsPDF('l', 'mm', 'letter'); // 'l' for landscape

  //   const imgWidth = 297; // A4 width in mm
  //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

  //   // Add the captured image to the PDF
  //   pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  //   pdf.save('box_labels_landscape.pdf');
  // };

  return (
    <div ref={contentRef} style={{ width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '10px' }}>
        {Array.from({ length: (endNumber - startNumber + 1) }).map((_, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              flex: '1 1 45%', // Take up 45% of available width
              marginBottom: '0px',
              pageBreakInside: 'avoid', // Prevent page break inside each block
              maxHeight: '500px', // Constrain block height to avoid overflow
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              {/* Top image */}
              <img 
                src="/ProdInfo.png" 
                alt="prodInfo"  
                style={{ marginBottom: '15px', width: '100%', maxWidth: '350px', height: 'auto' }} 
              />
            </div>

            {/* Product Information */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '20px', fontSize: 30, fontWeight: 'bold' }}>Product Code:</label>
              <span style={{ textDecoration: 'underline', padding: '5px 0', fontSize: 20 }}>
                {productName}
              </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '20px', fontSize: 30, fontWeight: 'bold' }}>Description:</label>
              <span style={{ textDecoration: 'underline', padding: '5px 0', fontSize: 20 }}>
                {description}
              </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '20px', fontSize: 30, fontWeight: 'bold' }}>Batch:</label>
              <span style={{ textDecoration: 'underline', padding: '5px 0', fontSize: 20 }}>
                {batchNumber}
              </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '20px', fontSize: 30, fontWeight: 'bold' }}>Box No:</label>
              <span style={{ textDecoration: 'underline', padding: '5px 0', fontSize: 20 }}>
                {startNumber + index}
              </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '20px', fontSize: 30, fontWeight: 'bold' }}>Net:</label>
              <span style={{ textDecoration: 'underline', padding: '5px 0', fontSize: 20 }}>
                {'45 lbs'}
              </span>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              {/* Bottom image (logo) */}
              <img 
                src="/bottomLogo.png" 
                alt="bottomLogo" 
                style={{ marginTop: '20px', width: '100%', maxWidth: '350px', height: 'auto' }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfGenerator;
