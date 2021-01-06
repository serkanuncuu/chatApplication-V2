import React, {Component} from 'react';
import ReactDOM from "react-dom";
import io from "socket.io-client";
import Mesajlar from "./Mesajlar";
import Users from "./Users";

const socket = io('http://127.0.0.1:8005');


class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mesaj:"",
            mesajlar: [],
            users: []
        }
        this.yeniMesaj = this.yeniMesaj.bind(this);
    }
    componentDidMount()
    {
        let username= this.props.data;
        socket.emit('yeni-kullanici', username, function (data) {
            if (!data){
                alert('Bu kullanıcı şu an odada! Yönlendiriliyorsunuz...');
                window.location.href="/"
            }
        });

        socket.on('mesaj', function (data){
            this.setState(prevState => ({
                mesajlar:[...prevState.mesajlar, data]
            }))
        }.bind(this));

        socket.on('users', function (data) {
            this.setState({
                users:[data]
            })
        }.bind(this));
    }

    yeniMesaj(e){
        e.preventDefault();
        let mesaj = this.state.mesaj;
        socket.emit('gonder', mesaj);
        this.setState({
            mesaj:""
        })
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="row chat">
                        <div className="col-md-8" >
                            <div id="contentMesaj" style={{height: "500px",border:"1px solid"}}>
                                {
                                    this.state.mesajlar.map((mesaj,i) => (
                                        <Mesajlar key={i} user={mesaj.nick} mesaj={mesaj.msg} />
                                    ))
                                }
                            </div>
                            <div className="message">
                                <form>
                                    <div className="input-group mb-3">
                                        <input id="mesaj" value={this.state.mesaj} onChange={event => this.setState({mesaj: event.target.value})} className="form-control" placeholder="Mesajınızı Yazın..." aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button onClick={this.yeniMesaj} className="btn btn-outline-secondary" type="button">Gönder</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="head col-md-12">
                                <h3>Kullanıcılar</h3>
                            </div>
                            <div className="kul col-md-12">
                                {
                                    this.state.users.map((usser,i) => (
                                        <Users key={i} user={usser}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Chat;

if (document.getElementById('chat')) {
    var veri = document.getElementById('chat').getAttribute('data-text');
    ReactDOM.render(<Chat data={veri} />, document.getElementById('chat'));
}
