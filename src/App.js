import logo from "./logo.svg";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useRef, useState } from "react";
import Lifecycle from "./Lifecycle";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]); // 새로운 일기를 가장 최상단에 배치하므로 0번째 인덱스에 newItem
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onModify = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onModify={onModify} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
