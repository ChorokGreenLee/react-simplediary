import {useRef, useState} from 'react';

const DiaryEditor = ({onCreate}) => {
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1
    });

    /*값이 변화할 때마다 커서가 위치한 태그의 value를 변화시키고 그 외의 값은 불변*/
    const handleStateChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        if (state.author.length < 1) {
            //alert("작성자는 최소 1글자 이상 입력");
            authorInput.current.focus();
            return; //break
        }

        if (state.content.length < 5) {
            //alert("본문은 최소 5글자 이상 입력");
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert('저장성공');
    };

    return (<div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input ref={authorInput}
                       name="author"
                       value={state.author} //초기값을 변화한 값으로 대체해주는 위치
                       onChange={handleStateChange}/>
            </div>
            <div>
            <textarea ref={contentInput}
                      name="content"
                      value={state.content}
                      onChange={handleStateChange}/>
            </div>
            <div>
                <select name="emotion"
                        value={state.emotion}
                        onChange={handleStateChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
};
export default DiaryEditor;