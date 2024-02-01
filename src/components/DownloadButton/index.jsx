import React from "react"
import { saveAs } from "file-saver"
import { Container } from "./style"

const DownloadButton = ({icon: Icon, fileName, title }) => {

  function handleDownload() {
    const fileUrl = fileName
    const nameFille = fileUrl.substring(fileUrl.lastIndexOf("/") + 1)

    saveAs(fileUrl, nameFille)
  }

  return (
    <Container>
      <button onClick={handleDownload}>{Icon} {title}</button>
    </Container>
  )
}

export default DownloadButton
