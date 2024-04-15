import React, { useState } from 'react';
import useRequest from './api/useRequest';
import styles from './styles/App.module.scss';

type Joke = {
  id: number;
  setup: string;
  punchline: string;
  loading?: boolean;
};

const App: React.FC = () => {
  const { data: jokes, error, loading } = useRequest<Joke[]>('https://api.sampleapis.com/jokes/goodJokes');
  const [customJokes, setCustomJokes] = useState<Joke[]>([]);
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');

  const addCustomJoke = () => {
    const newJoke = { id: Date.now(), setup, punchline };
    setCustomJokes([...customJokes, newJoke]);
    setSetup('');
    setPunchline('');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch jokes. Please try again later.</p>;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Jokes List</h1>
          {jokes?.slice(0, 5).map(joke => (
            <div key={joke.id} className={styles.joke}>
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </div>
          ))}
          <h2>Custom Jokes</h2>
          {customJokes.map(joke => (
            <div key={joke.id} className={styles["joke-input"]}>
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </div>
          ))}
          <div className={styles["joke-input"]}>
            <input type="text" value={setup} onChange={e => setSetup(e.target.value)} placeholder="Enter setup" />
            <input type="text" value={punchline} onChange={e => setPunchline(e.target.value)} placeholder="Enter punchline" />
            <button onClick={addCustomJoke}>Add Custom Joke</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
