import React from 'react';
import { Radio, message, Tabs, Popconfirm } from 'antd';
import List from '../components/Common/List';
import { observable, computed, useStrict, action, autorun } from 'mobx';
import { observer } from 'mobx-react';
import { getAdMachineStatus } from '../utils/utils';
import styles from './test.less';
import uiState from '../stores/uiState';

@observer
class Test extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: 1,
    };
    // var a = {n: 1};
    // var b = a;
    // a.x = a = {n: 2};
    // a = a.x = {n: 2};
    // console.log(a,b);
    // let array = [1,[2,3],[4,[5,6]]]
    // console.log(array.toString().split(','));
    // for (let i = 0; i < 5; i++) {
    //   setTimeout(function(){
    //     console.log('setTimeout: '+i);
    //   },0)
    //
    //   Promise.resolve().then(function() {
    //     console.log('promise: '+i);
    //   })
    //
    //   function abc(){
    //     console.log('function: '+i);
    //   }
    //   abc()
    // }
    // console.log(1111);
  }

  componentDidMount(){
    store.todos.push(
        new Todo("Get Coffee"),
        new Todo("Write simpler code")
    );
    store.todos[0].finished = true;
  }

  // onChange = (e) => {
  //   this.setState({
  //     value: e.target.value,
  //   });
  // }

  // handleBtnClick = () => {
  //   let { unfinishedTodoCount } = this.props.test;
  //   this.props.dispatch({
  //     type: 'test/addCount',
  //     payload: {
  //       unfinishedTodoCount: ++unfinishedTodoCount,
  //     },
  //   })
  // }

  render() {
    console.log('render', this.props);

    return (
      <div className={styles.main} style={{padding: 50}}>
        <ul>
          {this.props.todoList.todos.map(todo =>
            <TodoView todo={todo} key={todo.id} />
          )}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
        {/* <div>
          <button onClick={this.handleBtnClick} >Add</button>
        </div> */}
      </div>
    )
  }
}

const TodoCount = observer(({count}) => {
  return (
    <div>
      Tasks left: {count}
    </div>
  )}
)

const TodoView = observer(({todo,count}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onChange={()=> todo.finished = !todo.finished}
        // onClick={() => todo.finished = !todo.finished}
      />{todo.title+count}
    </li>
  )}
)

class Todo {
    id = Math.random();
    @observable title;
    @observable finished = false;
    constructor(title) {
        this.title = title;
    }
}

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

const store = new TodoList();
// For Eval button
window.store = store;
let Test1 = () => <Test todoList={store} uiState={uiState} />

export default Test1;
