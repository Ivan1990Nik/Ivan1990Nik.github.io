
import './App.css';


const App = () => {
  return (
    <div className='app-wraper'>
      <header className='header'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7fTFb3G8JZJy_oWg4rfoketLxdUnUF2eLw&usqp=CAU" />
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Messeges</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      
      </nav>
      <div className='content'>
        <div>
          <img src="https://kartinki.pics/uploads/posts/2021-03/thumbs/1616115428_4-p-vesna-krasivie-foto-5.jpg"/>
        </div>
        <div>Ava + Description</div>
        <div>My posts
          <div>New post</div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div >

  )
};
export default App;
