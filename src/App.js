import "./App.css";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Profile } from "./Profile/Profile";
import MyImage from "./Profile/me.jpg";
import { Container, Navbar } from "react-bootstrap";

function App() {
  const user = {
    fullName: "Houssem Rouabeh",
    bio: "Je suis Houssem Rouabeh la plupart d’entre vous me connaissent, évidement un étudiant comme vous tous, mais aussi pour celui qui ne me connait pas je suis un professionnel dans le domaine de l’IT.",
    profession: "IT Manager",
  };
  const handleName = () => {
    alert(user.fullName);
  };
  return (
    <div style={{ backgroundColor: "#faedf0" }}>
      <Navbar bg="dark">
        <Container>
          <marquee style={{ color: "white", fontSize: "30px" }}>
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Bienvenue sur mon portfolio, conçu avec React JS
          </marquee>
        </Container>
      </Navbar>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Profile user={user} handleName={handleName}>
          <img alt="moi" src={MyImage}></img>
        </Profile>
      </div>
    </div>
  );
}

export default App;
