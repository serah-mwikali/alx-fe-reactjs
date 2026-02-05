import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <MainContent />

      {/* Footer */}
      <Footer />

      {/* User Profiles */}
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <UserProfile
        name="Bob"
        age="30"
        bio="Enjoys cooking and traveling"
      />
      <UserProfile
        name="Charlie"
        age="28"
        bio="Fan of music and art"
      />

      {/* Counter Component */}
      <Counter />
    </div>
  );
}

export default App;

