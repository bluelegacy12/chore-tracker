import RenderChore from '../features/chores/RenderChore';

const ChoreInfoScreen = (props) => {
    return <RenderChore chore={props.chore} />
};

export default ChoreInfoScreen;