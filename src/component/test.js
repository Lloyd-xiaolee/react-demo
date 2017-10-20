import React, {Component} from 'react'

class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: '22',
      text: '22'
    }
  }
  handAuthor(e){
    this.setState({author:e.target.value})
  }
  handText(e){
    this.setState({text:e.target.value})
  }
  test(){
    console.log(this.state)
    this.props.onMytest()
  }
  render(){
    return(
      <div>
        <input type="text" placeholder="input your name" onChange={this.handAuthor.bind(this)} value={this.state.author}/>
        <input type="text" placeholder="input your text" onChange={this.handText.bind(this)} value={this.state.text}/>
        <button onClick={this.test.bind(this)}>测试按钮</button>
      </div>
    )
  }
}

export default Demo;