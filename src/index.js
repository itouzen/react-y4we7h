import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          id="container"
          documentPath="PDF_Succinctly.pdf"
          isExtractText={true}
          extractTextCompleted={extractTextCompleted}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          style={{ height: '640px' }}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              Annotation,
              FormFields,
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
}
function extractTextCompleted(args) {
  // Extract the Complete text of load document
  console.log(args);
  console.log(args.documentTextCollection[1]);
  // Extract the Text data.
  console.log(args.documentTextCollection[1][1].TextData);
  // Extract Text in the Page.
  console.log(args.documentTextCollection[1][1].PageText);
  // Extract Text along with Bounds
  console.log(args.documentTextCollection[1][1].TextData[0].Bounds);
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
