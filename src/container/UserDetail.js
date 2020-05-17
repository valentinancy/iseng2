import React from 'react';

class UserDetail extends React.Component {
    render() {
        const { name, role, password, username, email, address, phone_num, id } = this.props.data;
        return (
            <div className="user-detail-container">
                <div className="user-detail-header">User Detail:</div>
                <div>
                    <span>name: </span>
                    <span>{name}</span>
                </div>
                <div>
                    <span>username: </span>
                    <span>{username}</span>
                </div>
                <div>
                    <span>role: </span>
                    <span>{role}</span>
                </div>
                <div>
                    <span>email: </span>
                    <span>{email}</span>
                </div>
                <div>
                    <span>address: </span>
                    <span>{address}</span>
                </div>
                <div>
                    <span>password: </span>
                    <span>{password}</span>
                </div>
                <div>
                    <span>phone_num: </span>
                    <span>{phone_num}</span>
                </div>
            </div>
        )
    }
}

export default UserDetail;