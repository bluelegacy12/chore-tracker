import { useState } from 'react';
import { CHORES } from '../shared/chores';
import DirectoryScreen from './DirectoryScreen';
import { View } from 'react-native';
import ChoreInfoScreen from './ChoreInfoScreen';

const Main = () => {
    const [chores, setChores] = useState(CHORES);
    const [selectedChoreId, setSelectedChoreId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen chores={chores} onPress={choreId => setSelectedChoreId(choreId)} />
            <ChoreInfoScreen chore={chores.filter(chore => chore.id === selectedChoreId)[0]} />
        </View>
    );
};

export default Main;