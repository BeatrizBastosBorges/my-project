import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      <AppHeader />
      {/* <body className="App-body">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body> */}
      <Banner />
     <AppFooter />
    </div>
  );
}

export default App;
