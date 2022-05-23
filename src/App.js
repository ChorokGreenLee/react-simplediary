import logo from './logo.svg';
import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
    {
        id:1,
        author: "sd",
        emotion: 4,
        created_date: new Date().getTime()
    },
    {
        id:2,
        author: "sd",
        emotion: 4,
        created_date: new Date().getTime()
    },
    {
        id:3,
        author: "sd",
        emotion: 4,
        created_date: new Date().getTime()
    },
    {
        id:4,
        author: "sd",
        emotion: 4,
        created_date: new Date().getTime()
    },
    {
        id:5,
        author: "sd",
        emotion: 4,
        created_date: new Date().getTime()
    },
]

function App() {
  return (
    <div className="App">
        <DiaryEditor/>
        <DiaryList diaryList={dummyList}/>
        {/*<DiaryList diaryList={undefined}/> */}
    </div>
  );
}

export default App;