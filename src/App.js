
import './App.css';


const App = () => {
  return (
<div>
  <Header />
  <ul className='app'>
    <li>HTLM</li>
    <li>CSS</li>
    <li>JS</li>
    <li>JSX</li>
  </ul>
</div >
  );
}


const Header = () => {
  return (
    <ul>
      <a href="#s">a</a>
      <a href="#s">b</a>
      <a href="#s">c</a>
    </ul>
  )
};
export default App;
