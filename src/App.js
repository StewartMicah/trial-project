import './firebase.config';

import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';

function App() {
    return (
        <div className="app">
            <Header />
            <Input />
            <List />
        </div>
    );
}

export default App;
