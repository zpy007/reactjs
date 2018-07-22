const appState={
    title:{
        text:'练习吧',
        color:'red'
    },
    content:{
        text:'练习内容',
        color:'blue'

    }
}

function stateChanger(state,action){
    switch(action.type){
        case 'CHANGE_TITLE_TEXT':
            state.title.text=action.text;
            break;
        case 'CHANGE_TITLE_COLOR':
            state.title.color=action.color;
            break;
        default:
            break;

    }
}

function createStore(state,stateChanger){
    const getState=()=>state;
    const dispatch=(action)=>stateChanger(state,action);
    return {getState,dispatch};
}

function renderContent(content){
    const contentDom = document.getElementById('content');
    contentDom.innerHTML = content.text;
    contentDom.style.color = content.color;
}
function renderTitle(title){
    const titleDom = document.getElementById('title');
    titleDom.innerHTML=title.text;
    titleDom.style.color=title.color;
}
function renderApp(appState){
    renderTitle(appState.title);
    renderContent(appState.content);
}


const store=createStore(appState,stateChanger);
renderApp(store.getState);
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' });
renderApp(store.getState);