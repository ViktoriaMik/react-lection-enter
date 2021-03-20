import React, {Component} from 'react';
import UserComponent from'./Component/Component'
// import Header from "./Component/Header/Header";
// let userArr=[
//     {name:'Viktor',age:23},
//     {name:'Oleksandr',age:33},
//     {name:'kolya',age:44}
// ];
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Header/>
//                 {/*{userArr.map(value => (<UserComponent name={value.name} age={value.age}/>))}*/}
//                 {userArr.map(value => (<UserComponent {...value}/>))}
//             </div>
//
//         );
//     }
// }
//
// export default App;



import Users from "./Users/Users";

class App extends Component {
    state={
        users:[]
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
this.setState({users:value})
            })
    }

    render() {
        let {users}=this.state
        return (
            <div>{
                users.map(value=>(<Users item={value}/>))
            }

            </div>
        );
    }
}

export default App;