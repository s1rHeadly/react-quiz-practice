import Header from './components/Header.js';
import Main from './components/Main.js';
import { LOCAL_URL } from './utils/helpers.js';

const App = () =>{

  console.log(LOCAL_URL)

 return (
    <div className="app">
      <Header/>

      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>

    </div>
  );
}

export default App;
