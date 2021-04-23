import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {

    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        }
        return <div className="header">{user.name}r</div>
    }
}

//mapStateToProps actually called with 2 arguments state and props
const mapStateToPorps = (state, ownProps) => { //ownProps: It is a reference to the props which are sent to above class.
    return { user: state.users.find(user => user.id === ownProps.userId) };
}

export default connect(mapStateToPorps)(UserHeader);