```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Missing Route for a wildcard path to handle 404 error */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
```