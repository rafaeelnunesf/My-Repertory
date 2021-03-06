import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { RepertoryProvider } from "./contexts/repertoryContext";
import { SignUp, SignIn, Home, Repertory, Music } from "./pages/";

export default function App() {
  return (
    <AuthProvider>
      <RepertoryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/repertories/:repertoryId" element={<Repertory />} />
            <Route
              path="/repertories/:repertoryId/music/:musicId"
              element={<Music />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RepertoryProvider>
    </AuthProvider>
  );
}
