import logo from '../logo.svg';
export function Header() {
    return (
        <header className="App-header">
        <p>Regular Users Get Free Rides !
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this is my first React app and I am very excited!
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
      </header>
    )
        
   

} 