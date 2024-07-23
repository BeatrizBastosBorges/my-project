import logo from '../logo.svg';
import './css/AppFooter.css';

function AppFooter() {
    return (
        <div>
      <section className="footer">
        <div className="conteudo-footer container">
          <div className="conteudo-footer-info">
            <div className="container-logo">
                <img className="footer-logo" src={logo} alt="logo do Ract" />
              <p className="footer-titulo">Meu Projeto</p>
            </div>            
          </div>
          <div className="footer-formulario">
            <p className="texto-footer">
              Desenvolvido por: 
              <a href="https://www.linkedin.com/in/beatriz-bastos-b78b1325a/" target="_blank"> Beatriz Bastos Borges</a>
            </p>
          </div>
        </div>
      </section>
    </div>
    );
}

export default AppFooter;

