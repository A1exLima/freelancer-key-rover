import {
  Container,
  SideBar,
  CloseSideBar,
  Brand,
  ContentKey,
  Footer,
  ContentButton2,
  Content,
  Main,
  ContentMain,
  ContentVideo,
  ContentText,
  ContentButton,
  Barcode,
} from "./style"

import keyRover from "../../assets/svg/keyRover.svg"
import brand from "../../assets/svg/brand.svg"
import hop from "../../assets/svg/hop.svg"
import hop2 from "../../assets/svg/hop2.svg"

import { FaWhatsapp } from "react-icons/fa"
import { ImYoutube2 } from "react-icons/im"
import { FaLinkedin } from "react-icons/fa"
import { FaTools } from "react-icons/fa"
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb"
import { MdPictureAsPdf } from "react-icons/md"

import video from "../../assets/video/video23mb.mp4"
import VideoPlayer from "../../components/videoPlayer"

import Button from "../../components/button"

import DownloadButton from "../../components/DownloadButton"
import materialPdf from "../../assets/pdf/chave_multifuncional_rover.pdf"

import { useState } from "react"

export default function Home() {
  const [toggleDisplayContent, setToggleDisplayContent] = useState("toAppear")

  function handleClickButton() {
    setToggleDisplayContent((prevState) =>
      prevState === "toAppear" ? "hidden" : "toAppear"
    )
  }
  return (
    <Container data-toggle-display={toggleDisplayContent}>
      <Content data-toggle-display={toggleDisplayContent}>
        <SideBar data-toggle-display={toggleDisplayContent}>
          <Brand>
            <div>
              <img src={brand} alt="Marca" />
              <img src={hop} alt="Lúpulo" />
              <img src={hop2} alt="Lúpulo" />
            </div>

            <p>mestre cervejeiro</p>
          </Brand>

          <ContentButton2>
            <Button
              icon={<FaTools />}
              title="Chave multifuncional"
              onClick={handleClickButton}
            />
            <Button
              icon={<FaWhatsapp />}
              title="WhatsApp"
              link="https://wa.me/5511981121312?text=Ol%C3%A1+gostaria+de+conhecer+a+chave+multifuncional+ROVER+%F0%9F%9B%A0%EF%B8%8F."
            />
          </ContentButton2>

          <ContentKey>
            <div>
              <img src={keyRover} alt="Chave Rover" />
            </div>
          </ContentKey>
        </SideBar>

        <Footer data-toggle-display={toggleDisplayContent}>
          <a target="_blank" href="https://www.linkedin.com/in/a1exlima/">
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href="https://wa.me/5511947330282?text=Ol%C3%A1%2C+estou+interessado+em+desenvolver+um+projeto+web+com+voc%C3%AA%21"
          >
            <FaWhatsapp />
          </a>
          <a target="_blank" href="https://www.youtube.com/@A1exLima">
            <ImYoutube2 />
          </a>
          <p>Developed by Alex Lima</p>
        </Footer>

        <Main>
          <CloseSideBar>
            <TbLayoutSidebarLeftExpandFilled onClick={handleClickButton} />
          </CloseSideBar>
          <h1>
            CHAVE MULTIFUNCIONAL <img src={brand} alt="Marca" />
          </h1>

          <ContentMain>
            <ContentVideo data-toggle-display={toggleDisplayContent}>
              <VideoPlayer videoSource={video} />
            </ContentVideo>

            <ContentText>
              <p>
                Uma chave para resolver a vida do cervejeiro, mais de 10 funções
                reunidas em uma única ferramenta.
              </p>
            </ContentText>

            <ContentButton>
              <DownloadButton
                fileName={materialPdf}
                icon={<MdPictureAsPdf />}
                title="Download material"
              />
            </ContentButton>
          </ContentMain>

          <Barcode>Chave do mestre cervejeiro</Barcode>
        </Main>
      </Content>
    </Container>
  )
}
