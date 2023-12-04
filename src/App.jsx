import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Input } from './Input';
import { gettemplate } from './template';

function App() {
  const [name, setName] = useState('John Doe');
  const [role, setRole] = useState('Software Engineer');
  const [phone, setPhone] = useState('1234567890');
  const [linkedin, setLinkedin] = useState('https://www.linkedin.com/in/johndoe');
  const [calendar, setCalendar] = useState('https://calendly.com/johndoe');

  return (
    <div>
      <Input label='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <Input label='Role' value={role} onChange={(e) => setRole(e.target.value)} />
      <Input label='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Input label='LinkedIn' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
      <Input label='Calendar' value={calendar} onChange={(e) => setCalendar(e.target.value)} />

      <br />
      <br />

      <div dangerouslySetInnerHTML={{ __html: gettemplate(name, role, phone, linkedin, calendar) }} />

      <div
        style={{
          height: 540,
          backgroundColor: 'black',
          border: '2px solid black',
          overflow: 'auto',
          textAlign: 'left',
        }}
      >
        <pre style={{ color: 'white' }}>{gettemplate(name, role, phone, linkedin, calendar)}</pre>
      </div>
    </div>
  );
}

export default App;
