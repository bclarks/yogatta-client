import logo from "../1bd0810ff4454b4ab644323927b0b826 (1).png";
import "../App.css";
import sloth from "../utils/30339E75-A933-4001-9E30-0E4FB0E0FFAC_4_5005_c.jpeg";
import SearchBar from "../components/SearchBar/SearchBar";
function HomePage() {
  return (
    <div className="App">
      <SearchBar />
      <header className="App-header">
        <img src={sloth} className="App-logo" alt="sloth" />
      </header>
    </div>
  );
}

export default HomePage;
