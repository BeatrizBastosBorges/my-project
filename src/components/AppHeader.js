import logo from "../logo.svg";
import "./css/AppHeader.css";

function AppHeader() {
  return (
    <section className="header">
      <div className="conteudo-header">
        <img src={logo} className="AppHeader-logo" alt="logo" />
      </div>
    </section>

    
  );
}

export default AppHeader;
