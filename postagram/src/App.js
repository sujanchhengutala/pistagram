import {BrowserRouter as Router, Route} from 'react-router-dom'
import FeedPage from './pages/feed'
import ExplorePage from './pages/explore'
import ProfilePage from './pages/profile'
import PostPage from './pages/post'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'
import EditProfilePage from './pages/edit-profile'
import NotFoundPage from './pages/not-found'

function App() {
  return (
   <Router>
      <switch>
      <Route exact path = "/">
      <FeedPage />
      </Route>

      <Route path = '/explore'>
      <ExplorePage />
      </Route>

      <Route exact path = '/:username'>
      <ProfilePage />
      </Route>

      <Route exact path = '/p/:postid'>
      <PostPage />
      </Route>

      <Route path = '/accounts/login'>
      <LoginPage />
      </Route>

      <Route path = '/accounts/signup'>
      <SignupPage />
      </Route>

      <Route path = '/accounts/edit'>
      <EditProfilePage />
      </Route>

      <Route path = '/* '>
      <NotFoundPage />
      </Route>

      </switch>

    </Router>
  );   
}

export default App;
