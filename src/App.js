import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './Components/SignIn';
import SignOut from './Components/SignOut';
import ChatRoom from './Components/ChatRoom';

firebase.initializeApp({
  apiKey: "AIzaSyCHJY0GGvOZrtPyaMb6GcuwE0w9e-T5fB8",
  authDomain: "chat-app-db8e6.firebaseapp.com",
  projectId: "chat-app-db8e6",
  storageBucket: "chat-app-db8e6.appspot.com",
  messagingSenderId: "454428862980",
  appId: "1:454428862980:web:5daf6b6dd9b87e2e666351"

})

//instance of firebase authentication service
const auth = firebase.auth();

function App() {
  //to check if user is logged in or not
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Chat App</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
