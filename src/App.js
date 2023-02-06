import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;

// echo "# findmyhostel-phero" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jayed-phero/findmyhostel-phero.git
// git push -u origin main
