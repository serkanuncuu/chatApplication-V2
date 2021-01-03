import React, {Component} from 'react';
import ReactDOM from "react-dom";
import io from "socket.io-client";

const socket = io('http://127.0.0.1:8005');


class Chat extends Component {
    componentDidMount()
    {
        let username= $('#chat').attr("data-text");
        socket.emit('yeni-kullanici', username, function (data) {
            if (!data){
                alert('Bu kullanıcı şu an odada! Yönlendiriliyorsunuz...');
                window.location.href="/"
            }
        });
    }

    render() {
        socket.on('users', function (data) {
            let html = '';
            for(let i=0; i<data.length; i++){
                html += data[i] + '<br/>';
            }
            $('#users').html(html);
        });

        const yeniMesaj = (e) =>{
            e.preventDefault();
            const mesaj = $('#mesaj').val();
            socket.emit('gonder', mesaj);
            $('#mesaj').val('');
        };

        socket.on('mesaj', function (data){
            $('#contentMesaj').append('<b>' + data.nick + ': </b>' + data.msg + '<br/>');
        });
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="row chat">
                        <div className="col-md-8" >
                            <div id="contentMesaj" style={{height: "500px",border:"1px solid"}}>

                            </div>
                            <div className="message">
                                <form>
                                    <div className="input-group mb-3">
                                        <input id="mesaj" className="form-control" placeholder="Mesajınızı Yazın..." aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button onClick={yeniMesaj} className="btn btn-outline-secondary" type="button">Gönder</button>
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
                                <span id="users"/>
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
    ReactDOM.render(<Chat />, document.getElementById('chat'));
}
