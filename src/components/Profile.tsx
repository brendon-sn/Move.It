import { useChallenges } from '../hooks/useChallenges';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/62853184?s=400&u=736cd0a44877fed4320cbe4c3b98c02ff0ba27a7&v=4" alt="Brendon Sousa"/>
      <div>
        <strong>Brendon Sousa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}