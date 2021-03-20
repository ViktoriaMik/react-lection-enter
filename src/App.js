import React, {Component} from 'react';
import UserComponent from'./Component/Component'
import Header from "./Component/Header/Header";
let userArr=[
    {name:'Viktor',age:23},
    {name:'Oleksandr',age:33},
    {name:'kolya',age:44}
];
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/*{userArr.map(value => (<UserComponent name={value.name} age={value.age}/>))}*/}
                {userArr.map(value => (<UserComponent {...value}/>))}
            </div>

        );
    }
}

export default App;