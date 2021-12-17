import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "../Global/style.css";
import * as S from "./style";

export function Main() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        mains {
          titleour
          imgcar {
            url
          }
          imgcarteira {
            url
          }
          titleuloax
          titlesecure
          paragraphinfo
          imgmulher {
            url
          }
          btnbook
          imgcarros {
            url
          }
          imgmaps {
            url
          }
          imgtaximaps {
            url
          }
          titledownload
          titleourtoday
        }
      }
    }
  `);
  const {
    imgcar,
    imgcarteira,
    titleuloax,
    titlesecure,
    paragraphinfo,
    imgmulher,
    btnbook,
    imgcarros,
    imgmaps,
    imgtaximaps,
    titledownload,
    titleourtoday,
  } = data.alldata.mains[0];

  return (
    <>
      <S.Container>
        <S.ContainerCards>
          <S.BoxCards>
            <S.Box1>
              <S.ParagraphOur>Our</S.ParagraphOur>
              <S.ParagraphTaxi>Taxi</S.ParagraphTaxi>
            </S.Box1>
          </S.BoxCards>
          <S.Carros>
            <S.Info>
              <S.Number>01</S.Number>
              <S.ParagraphNumber>CAR 1</S.ParagraphNumber>
              <S.Descricao>act that a reader will be distracted</S.Descricao>
              <div>
                <a href="#">
                  <S.ImgCar src={imgcar.url} alt="Carro" />
                </a>
              </div>
            </S.Info>
            <S.Info>
              <S.Number>02</S.Number>
              <S.ParagraphNumber>CAR 2</S.ParagraphNumber>
              <S.Descricao>act that a reader will be distracted</S.Descricao>
              <div>
                <a href="#">
                  <S.ImgCar src={imgcar.url} alt="Carro" />
                </a>
              </div>
            </S.Info>
            <S.Info>
              <S.Number>03</S.Number>
              <S.ParagraphNumber>CAR 3</S.ParagraphNumber>
              <S.Descricao>act that a reader will be distracted</S.Descricao>
              <div>
                <a href="#">
                  <S.ImgCar src={imgcar.url} alt="Carro" />
                </a>
              </div>
            </S.Info>
          </S.Carros>
        </S.ContainerCards>

        <S.ContainerWhy>
          <S.BoxWhy>
            <S.TitleBoxWhy>
              <S.TitleWhy>
                Why Ride
                <S.ParagraphWhy>With Uloax</S.ParagraphWhy>
              </S.TitleWhy>
            </S.TitleBoxWhy>
          </S.BoxWhy>
        </S.ContainerWhy>

        <S.ContainerConteudo>
          <div>
            <div>
              <img src={imgcarteira.url} alt="carteira" />
            </div>
            <div>
              <h1>{titleuloax}</h1>
              <p>{paragraphinfo}</p>
              <button>{btnbook}</button>
            </div>
          </div>

          <div>
            <div>
              <img src={imgmulher.url} alt="Mulher de cell na mao" />
            </div>
            <div>
              <h1>{titlesecure}</h1>
              <p>{paragraphinfo}</p>
              <button>{btnbook}</button>
            </div>
          </div>

          <div>
            <div>
              <img src={imgcarros.url} alt="Carros" />
            </div>
            <div>
              <h1>{titleuloax}</h1>
              <p>{paragraphinfo}</p>
              <button>{btnbook}</button>
            </div>
          </div>

          <div>
            <div>
              <img src={imgcarros.url} alt="Carros" />
            </div>
            <div>
              <h1>{titlesecure}</h1>
              <p>{paragraphinfo}</p>
              <button>{btnbook}</button>
            </div>
          </div>
        </S.ContainerConteudo>
        <div imgtaximaps={imgtaximaps.url}>
          <div>
            <h1>{titledownload}</h1>
            <h2>{titleourtoday}</h2>
          </div>

          <div>
            <div>
              <img src={imgmaps.url} alt="Cell Maps" />
            </div>
          </div>
        </div>
      </S.Container>
    </>
  );
}
