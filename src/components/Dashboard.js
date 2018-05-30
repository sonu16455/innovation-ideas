import React, { Component } from 'react';
import Axios from 'axios';
import styles from  '../css/style.css'
// import 'test.css';


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      post: "",
      list: []
    }
    this.handlevent = this.handlevent.bind(this);
    this.likeIdea = this.likeIdea.bind(this);
    this.submit = this.submit.bind(this);
    this.deleteitem = this.deleteitem.bind(this);
  }

    componentDidMount(){
    Axios.get('http://192.168.43.2:8081/post')
    .then(res => {const list = res.data.content;console.log(res.data);this.setState({list})})
    .catch(error => {
      console.log(error)})
    } 

  

  handlevent(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  likeIdea(post){
    console.log(post)
    const likeList = [...this.state.list];
    likeList[post].like = !likeList[post].like;
    if(likeList[post].like){
      likeList[post].count = 1;
    }else{
      likeList[post].count = 0;
    }
    this.setState({
      list:likeList
    })
  }

  submit(event){
    event.preventDefault();
    const data = {
      username: this.state.username,
      post: this.state.post,
      likes: 0
    };
    console.log(data);

    Axios.post('http://192.168.43.2:8081/post',data)
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })

    const ideas = this.state.list;
      ideas.push(data);
      this.setState({
        list:ideas
      });
      this.setState({
        username:'',
          post:''
      })
  }


  deleteitem(index) {
    const newList = [...this.state.list];
    newList.splice(index,1);
    this.setState({
      list: newList
    })
};


  render() {
    return (
      <React.Fragment>
        <div>
            <center>
          <h2>Share your today's thought here</h2>
            </center>
          <form className="postform">
            <div><input type="text" placeholder="Share Your Thoughts here ..." name="post" className="inputcontainer" value={this.state.post} onChange={this.handlevent} required/></div>
            <div><input type="text" placeholder="Share Your Name here ..." name="username" className="author" value={this.state.username} onChange={this.handlevent} required/></div>
            <div><button onClick={this.submit}>Post</button></div>
          </form>
    </div>
    <hr/> 
      {this.state.list.map((item,index)=>{
        return(
          <div className="smallcointaier" key={index}>
         <div className="closewraper"> 
            <i className="fa fa-close delete" onClick={()=>this.deleteitem(index)}></i>
          </div>
            <q className='itemidea'>{item.post}</q>
            <footer className="signature">- {item.username}</footer>
            <div className="countme"><i className="fa fa-thumbs-up like" onClick={()=>this.likeIdea(index)}></i>{item.likes}</div>
          </div>
        )
      })}
      
      </React.Fragment>
    )
  }
}

export default Dashboard;