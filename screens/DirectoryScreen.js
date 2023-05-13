import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: chore }) => {
        return (
            <ListItem onPress={() => props.onPress(chore.id)}>
                <Avatar rounded source={chore.image} />
                <ListItem.Content>
                    <ListItem.Title>{chore.name}</ListItem.Title>
                    <ListItem.Subtitle>{chore.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={props.chores}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;