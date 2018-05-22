import React, { Component } from 'react';
import styles from  '../css/style.css'
// import 'test.css';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      idea: "",
      list: []
    }
    this.handlevent = this.handlevent.bind(this);
    this.likeIdea = this.likeIdea.bind(this);
    this.submit = this.submit.bind(this);
    this.deleteitem = this.deleteitem.bind(this);
  }


  handlevent(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  likeIdea(idea){
    console.log(idea)
    const likeList = [...this.state.list];
    likeList[idea].like = !likeList[idea].like;
    if(likeList[idea].like){
      likeList[idea].count = 1;
    }else{
      likeList[idea].count = 0;
    }
    this.setState({
      list:likeList
    })
  }

  submit(event){
    event.preventDefault();
    const data = {
      name: this.state.name,
      idea: this.state.idea,
      like: false,
      count: 0
    };
    const ideas = this.state.list;
      ideas.push(data);
      this.setState({
        list:ideas
      });
      this.setState({
          name:'',
          idea:''
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
            <div><input type="text" placeholder="Share Your Thoughts here ..." name="idea" className="inputcontainer" value={this.state.idea} onChange={this.handlevent} required/></div>
            <div><input type="text" placeholder="Share Your Name here ..." name="name" className="author" value={this.state.name} onChange={this.handlevent} required/></div>
            <div><button onClick={this.submit}>Post</button></div>
          </form>
    </div>
    <hr/>
      {this.state.list.map((item,index)=>{
        return(
          <div className="smallcointaier" key={item.name}>
         <div className="closewraper"> 
            <i className="fa fa-close delete" onClick={()=>this.deleteitem(index)}></i>
          </div>
            <q className='itemidea'>{item.idea}</q>
            <footer className="signature">- {item.name}</footer>
            <div className="countme"><i className="fa fa-thumbs-up like" onClick={()=>this.likeIdea(index)}></i>{item.count}</div>
          </div>
        )
      })}
      
      </React.Fragment>
    )
  }
}

export default Dashboard;