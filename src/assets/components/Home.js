/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import{Link} from "react-router-dom";
//import Pcontent from './assets/components/Pcontent';
import '../css/index.css';
const axios =require('axios');
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            domain:'http://a.itying.com/'
         };
    }
    requesData=()=>{
        var api=this.state.domain+'api/productlist';

        axios.get(api)
        .then((response)=>{
            console.log(response);
            this.setState({
                list:response.data.result
            })
        })
        .catch(function (error){
            console.log(error);
        })

    }
    //组件加载便去请求数组，用到生命周期函数
    componentDidMount(){
        this.requesData();
    } 
    render() {
        return (
            <div className="home">
                <div className="list">
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                <div className="item" key={key}>
                                <h3 className="item_cate">{value.title}</h3>
                                <ul className="item_list">
                                    {
                                        value.list.map((v,k)=>{
                                            return(
                                            <li key={k}>
                                                <Link to={`/pcontent/${v._id}`}>

                                                    <div className="inner">
                                                        <img src={`${this.state.domain}${v.img_url}`}/>
                                                        <p className="title">{v.title}</p>
                                                        <p className="price">{v.price}元</p>
                                                    </div>
                                                </Link>    
                                            </li>
                                            )
                                        } )
                                    }
                                   
                                </ul>
                            </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        );
    }
}

export default Home;