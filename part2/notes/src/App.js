import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  // 利用受控组件访问用户在input输入的数据
  const [newNote, setNewNote] = useState('a new note...')
  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // 只查看重要的笔记
  const [showAll, setShowAll] = useState(true)
  // showAll 为真表示显示所有笔记，否则只显示重要的笔记
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = (event) => {
    // 防止提交表单的默认动作，默认动作会导致忽略其他动作，页面重新加载
    event.preventDefault()
    // 输出 event.target 是整个表单
    // console.log('button clicked', event.target)
    // 创建新笔记
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    // 创建一个新数组，永远不要直接改变状态
    setNotes(notes.concat(noteObject))
    // 重置input中的字符串
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}></Note>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App