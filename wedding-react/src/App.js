import './App.css';
import './index.css';
import Navbar from './Navbar';
import Title from './Title';
import Solemnisation from './Solemnisation';
import Reception from './Reception';
import Guestbook from './Guestbook';
import GMap from './GMap';
import Footer from './Footer';

function App() {
  return (
    <>
    <body>
      <Navbar/>
      <Title/>
      <Solemnisation/>
      <Reception/>
      <Guestbook/>
      <GMap/>
      <Footer/>
    </body>
    </>
   
  );
}

export default App;
