import React from 'react';
import UserInfo from './components/UserInfo';
import Card from './components/Card';

const App: React.FC = () => {
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };

  return (
    <div className="app">
      <h3>Card Example 1 and Task 1</h3>
      <Card>
        <UserInfo 
          name={user.name}
          age={user.age}
          email={user.email}
        />
      </Card>

      <Card>
        <h3>Card Example 2 and Task 2</h3>
        <p>Random Content pew pew pew...</p>
      </Card>
    </div>
  );
};

export default App;