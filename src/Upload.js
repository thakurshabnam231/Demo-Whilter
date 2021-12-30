import { useState } from 'react'
import { Storage } from 'aws-amplify';

function App() {
  const [file, setFile] = useState();
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="App">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={async () => {
        const storageResult = await Storage.put(file.name, file, {
          level: 'public',
          type:  "text/plain",
        })
        // Insert predictions code here later
        setUploaded(true)
        console.log(storageResult);
      }}>Upload </button>

      <div>
        {uploaded
          ? <div>Your file is uploaded!</div>
          : <div>Upload a file to get started</div>}
      </div>
    </div>
    );
}

export default App;