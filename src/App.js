

import AppRoutes from "./Routes/config";
import {
  
  RouterProvider,
} from "react-router-dom";
function App() {
  return (
    <div>
    
    <RouterProvider router={AppRoutes} />
    </div>
  );
}

export default App;
