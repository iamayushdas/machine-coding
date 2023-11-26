import { useState } from "react";
import explorer from "../data/folderData";
import Folder from "./Folder";
import useTraverseTree from "../hooks/useTraverseTree";

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree()

  const handleInsertNode = (folderId, item, isFolder) =>  {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree)
  }
  return (
    <>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </>
  );
};

export default FileExplorer;
