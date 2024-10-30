To make a printable resume in React and handle both excluding non-printable elements and providing a file upload link, here are the steps you can follow:

### 1. **Excluding Non-Printable Elements**

You can use CSS with media queries to control what appears in the printed version of the resume. Specifically, use the `@media print` query to hide elements that should not be included when printing (e.g., buttons, navigation bars).

#### Example CSS for Excluding Elements:

```css
@media print {
  /* Hide elements when printing */
  .no-print {
    display: none;
  }
}
```

In your JSX, simply add the `no-print` class to any component or element you want to exclude from the printed version.

#### Example JSX:

```jsx
<div className="resume">
  <header>
    <h1>John Doe</h1>
    <p>Software Developer</p>
  </header>

  {/* Non-printable button */}
  <button className="no-print">Download Resume</button>

  <section>
    <h2>Experience</h2>
    <p>Details of work experience...</p>
  </section>
</div>
```

This ensures the button will be visible on screen but not in the printout.

### 2. **Creating a Printable View**

To trigger the browser's print functionality when the user clicks a button, you can use `window.print()` in JavaScript.

#### Example Print Button:

```jsx
<button onClick={() => window.print()} className="no-print">
  Print Resume
</button>
```

### 3. **Handling File Upload for Resume**

To allow users to upload a resume (e.g., PDF or Word document), you can add a file input element. The file can be uploaded and displayed or processed accordingly.

#### Example File Upload Component:

```jsx
import React, { useState } from "react";

function ResumeUploader() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(URL.createObjectURL(uploadedFile));
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} className="no-print" />
      {file && (
        <iframe
          src={file}
          title="Resume Preview"
          width="100%"
          height="500px"
        ></iframe>
      )}
    </div>
  );
}

export default ResumeUploader;
```

In this example:

- Users can upload their resume through a file input.
- The uploaded file is previewed using an `<iframe>`. This could be adjusted based on how you want the resume displayed.

### 4. **Bringing It Together**

You can combine both the printable and file upload features in your main resume component, while ensuring non-printable elements like the file upload form, buttons, and any other interactive components are hidden during printing.

#### Complete Example:

```jsx
import React, { useState } from "react";

function Resume() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(URL.createObjectURL(uploadedFile));
  };

  return (
    <div className="resume-container">
      <header>
        <h1>John Doe</h1>
        <p>Software Developer</p>
      </header>

      <button onClick={() => window.print()} className="no-print">
        Print Resume
      </button>

      <input type="file" onChange={handleFileUpload} className="no-print" />

      {file && (
        <iframe
          src={file}
          title="Resume Preview"
          width="100%"
          height="500px"
        ></iframe>
      )}

      <section>
        <h2>Experience</h2>
        <p>Details of work experience...</p>
      </section>

      <style jsx>{`
        @media print {
          .no-print {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Resume;
```

### Summary:

- **CSS**: Use `@media print` to hide non-printable elements.
- **JSX**: Add the `no-print` class to components that should not appear when printing.
- **File Upload**: Allow users to upload files using an `<input type="file">` element, and display the uploaded file.
