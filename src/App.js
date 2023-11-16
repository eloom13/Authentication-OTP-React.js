import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import ProtectedRoute from "./components/ProtectedRoute"
import { UserAuthContextProvider } from './context/UserAuthContext';
import PhoneSignup from './components/PhoneSignup';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<ProtectedRoute><Home></Home></ProtectedRoute>}/>
              <Route path="/" element={<Login/>}/>
              <Route path="signup" element={<Signup/>}/>
              <Route path="phone-signup" element={<PhoneSignup/>}/>
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
