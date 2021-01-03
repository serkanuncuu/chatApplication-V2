import React, {Component} from 'react';
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io('http://127.0.0.1:8005');

class Giris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:""
        }
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onSubmitButton(e) {
        e.preventDefault();
        const name = this.state.userName;

        socket.emit('yeni-kullanici', name, function (data) {
            if (data){
                axios.post('formSubmit', {
                    name: name
                }).then(function (response) {
                    const { username } = response.data;
                    if(name == username){
                        window.location.href = "/chat?username="+username+"";
                    }
                }).catch(function (error) {
                        console.log(error);
                    });
            }else{
                alert('Kullanıcı Mevcut');
            }
        });

    }

    render() {
        return (
            <div className="giris">
                <form onSubmit={this.onSubmitButton}>
                    <div className="form-group">
                        <label htmlFor="userName">Kullanıcı Adı</label>
                        <input  className="form-control" name={"username"} onChange={event => this.setState({userName: event.target.value})} id="userName"  placeholder="Kullanıcı adınızı girin..."/>
                    </div>
                    <button className="btn btn-primary">Gönder</button>
                </form>
            </div>
        );
    }
}

export default Giris;
