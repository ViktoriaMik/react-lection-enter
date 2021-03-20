import React, {Component} from 'react';

class UserComponent extends Component {
    render() {
        let {name,age}=this.props;
        return (
            <div>
                <h3>{name}</h3>
                <h5>{age}</h5>
            </div>
        );
    }
}

export default UserComponent;