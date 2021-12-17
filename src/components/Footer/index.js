import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as S from "./style";
import "../Global/style.css";

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        footers {
          titleaddress
          paragraphlorem
          titlelinks
          btnhome
          btnabout
          btntaxi
          btnbooking
          btncontatos
          titlefollow
          iconfacebook {
            url
          }
          icontwitter {
            url
          }
          iconlinkedin {
            url
          }
          iconyoutube {
            url
          }
          iconinstagram {
            url
          }
          btnsubscribe
          imgbolinha {
            url
          }
        }
      }
    }
  `);

  const {
    titleaddress,
    paragraphlorem,
    titlelinks,
    btnhome,
    btnabout,
    btntaxi,
    btnbooking,
    btncontatos,
    titlefollow,
    iconfacebook,
    icontwitter,
    iconlinkedin,
    iconyoutube,
    iconinstagram,
    btnsubscribe,
    imgbolinha,
  } = data.alldata.footers[0];

  return (
    <>
      <S.ContainerFooterConteudo>
        <S.ContainerFooter>
          <S.SecaoFooter>
            <S.BoxFooter>
              <S.BoxAddress>
                <S.TitleAddress>{titleaddress}</S.TitleAddress>
                <S.ParagraphLorem>{paragraphlorem}</S.ParagraphLorem>
              </S.BoxAddress>

              <S.BoxLinks>
                <S.TitleFollow>{titlelinks}</S.TitleFollow>
                <S.Link href="#">
                  <S.BoxHome>
                    <S.ImgBolinha src={imgbolinha.url} alt="Bolinha" />
                    <p>{btnhome}</p>
                  </S.BoxHome>
                  <S.BoxRotas>
                    <S.ImgBolinha src={imgbolinha.url} alt="Bolinha" />
                    <p>{btnabout}</p>
                  </S.BoxRotas>
                  <S.BoxRotas>
                    <S.ImgBolinha src={imgbolinha.url} alt="Bolinha" />
                    <p>{btntaxi}</p>
                  </S.BoxRotas>
                  <S.BoxRotas>
                    <S.ImgBolinha src={imgbolinha.url} alt="Bolinha" />
                    <p>{btnbooking}</p>
                  </S.BoxRotas>
                  <S.BoxRotas>
                    <S.ImgBolinha src={imgbolinha.url} alt="Bolinha" />
                    <p>{btncontatos}</p>
                  </S.BoxRotas>
                </S.Link>
              </S.BoxLinks>

              <S.BoxFollow>
                <S.TitleFollow>{titlefollow}</S.TitleFollow>
                <S.Link href="#">
                  <S.BoxConteudoFollow>
                    <S.ImgSociais src={iconfacebook.url} alt="Facebook" />
                    <S.ParagraphSociais>Facebook</S.ParagraphSociais>
                  </S.BoxConteudoFollow>

                  <S.BoxConteudoFollow>
                    <S.ImgSociais src={icontwitter.url} alt="Twitter" />
                    <S.ParagraphSociais>Twitter</S.ParagraphSociais>
                  </S.BoxConteudoFollow>

                  <S.BoxConteudoFollow>
                    <S.ImgSociais src={iconlinkedin.url} alt="Linkedin" />
                    <S.ParagraphSociais>Linkedin</S.ParagraphSociais>
                  </S.BoxConteudoFollow>

                  <S.BoxConteudoFollow>
                    <S.ImgSociais src={iconyoutube.url} alt="Youtube" />
                    <S.ParagraphSociais>Youtube</S.ParagraphSociais>
                  </S.BoxConteudoFollow>

                  <S.BoxConteudoFollow>
                    <S.ImgSociais src={iconinstagram.url} alt="Instagram" />
                    <S.ParagraphSociais>Instagram</S.ParagraphSociais>
                  </S.BoxConteudoFollow>
                </S.Link>
              </S.BoxFollow>

              <S.BoxNew>
                <S.TitleFollow>Newusletter</S.TitleFollow>
                <S.Input placeholder="Enter Your Email"></S.Input>
                <S.BtnSubscribe>{btnsubscribe}</S.BtnSubscribe>
              </S.BoxNew>
            </S.BoxFooter>
          </S.SecaoFooter>
        </S.ContainerFooter>
        <S.BoxCopyright>
          <div>
            <S.ParagraphCopyright>
              2019 All Rights Reserved.
              <p>Free html Templates</p>
            </S.ParagraphCopyright>
          </div>
        </S.BoxCopyright>
      </S.ContainerFooterConteudo>
    </>
  );
}
