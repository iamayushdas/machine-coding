import React, { useState } from "react";
import '../App.css'
const Folder = ({ explorer, handleInsertNode }) => {
  console.log(explorer);
  const [expand, setExpand] = useState(false)
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  })
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation()
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder
    })
  }
  const handleNewFile = (e, isFolder) => {
    e.stopPropagation()
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder
    })
  }

  const onAdd = (e) => {
    if(e.keyCode === 13 && e.target.value){
      // add logic
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
      setShowInput({...showInput, visible: false})
    }
  }

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>🗂️ {explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFile(e, false)}>File +</button>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
          </div>
        </div>
        <div style={{display: expand? "block":"none", paddingLeft: 25}}>
          {
            showInput.visible && (
              <div className="inoutContainer">
                <span>{showInput.isFolder? "🗂️":"📄" }</span>
                <input onKeyDown={onAdd} autoFocus type="text" onBlur={()=>setShowInput({...showInput, visible: false})} className="inputContainer__input" />
              </div>
            )
          }
          {explorer?.items?.map((item) => {
            return <Folder handleInsertNode={handleInsertNode} key={item.id} explorer={item} />;
          })}
        </div>
      </div>
    );
  }else {
    return <span className="file">📄 {explorer.name}</span>
  }
};

export default Folder;
