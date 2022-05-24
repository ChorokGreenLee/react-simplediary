import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList, onRemove, onModify }) => {
  /*3*/
  //console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다</h4>
      <div>
        {diaryList.map((it, idx) => (
          <DiaryItem
            key={it.id}
            {...it}
            onRemove={onRemove}
            onModify={onModify}
          />
          /*each child in a list should hav a unique key prop it.id or idx*/
          /*
                    <div key={it.id}>
                        <div>작성자 : {it.author}</div>
                        <div>일기 : {it.content}</div>
                        <div>감정 : {it.emotion}</div>
                        <div>작성일자 : {it.created_date}</div>
                    </div>
                     */
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
}; //cannot read properties of undefined
export default DiaryList;
