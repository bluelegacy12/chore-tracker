import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderChore = ({ chore }) => {
    if (chore) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={chore.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 20
                        }}>
                            {chore.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{chore.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderChore;