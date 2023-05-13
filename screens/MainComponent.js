import { useState } from 'react';
import { CHORES } from '../shared/chores';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [chores, setChores] = useState(CHORES);

    return <DirectoryScreen chores={chores} />;
};

export default Main;