import React from 'react';
import UserDetail from './UserDetail';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selectedUser: {}
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/users/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ 
                users: data,
            })
        }).catch(err => {
            console.log(err);
        });
    }

    handleEdit = data => {
        this.setState({
            selectedUser: data,
        })
    }

    render() {
        return (
            <div className="container">
                <div className="user-header">Data Pengguna</div>
                <table className="user-table">
                    <tr>
                        <th>Id</th>
                        <th width="30%">Name</th>
                        <th width="20%">Username</th>
                        <th>Role</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    {this.state.users.map(user => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td onClick={() => this.handleEdit(user)}><a href="#">{user.name}</a></td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>{user.password}</td>
                                <td>{user.phone_num}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                            </tr>
                        )
                    })}
                </table>
                <UserDetail data={this.state.selectedUser} />
            </div>
        );
    }
}

export default Users;
