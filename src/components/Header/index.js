import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Carousel from "nuka-carousel";
import * as S from "./style";
import "../Global/style.css";

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          imglogoheader {
            url
          }
          paragraphhome
          paragraphtaxi
          paragraphbooking
          paragraphcontatos
          titlebook
          paragraphnumber
          paragraphbook
          paragraphevery
          btnsearch
          imgtaxi {
            url
          }
          imgtaxitwo {
            url
          }
        }
      }
    }
  `);

  const {
    imglogoheader,
    paragraphhome,
    paragraphtaxi,
    paragraphbooking,
    paragraphcontatos,
    titlebook,
    paragraphnumber,
    paragraphbook,
    paragraphevery,
    btnsearch,
    imgtaxi,
    imgtaxitwo,
  } = data.alldata.headers[0];

  return (
    <>
      <S.Container>
        <S.BoxLogo>
          <S.ImgLogo src={imglogoheader.url} alt="Logo" />
        </S.BoxLogo>

        <S.ContainerBtns>
          <S.Btns>{paragraphhome}</S.Btns>
          <S.Btns>{paragraphtaxi}</S.Btns>
          <S.Btns>{paragraphbooking}</S.Btns>
          <S.Btns>{paragraphcontatos}</S.Btns>
        </S.ContainerBtns>
      </S.Container>

      <S.ContainerHeader>
        <S.BoxSlider>
          <S.Box>
            <S.BoxBook>
              <S.TitleBook>{titlebook}</S.TitleBook>
              <S.ParagraphNumber>{paragraphnumber}</S.ParagraphNumber>
            </S.BoxBook>
            <Carousel>
              <S.BoxImgTaxi>
                <S.ImgTaxi src={imgtaxi.url} alt="Image Taxi" />
              </S.BoxImgTaxi>
            </Carousel>
          </S.Box>

          <S.BoxDestino>
            <S.ParagraphBook>{paragraphbook}</S.ParagraphBook>
          </S.BoxDestino>

          <S.BoxInputs>
            <S.ParagraphEvery>{paragraphevery}</S.ParagraphEvery>

            <S.BoxForm>
              <S.Input placeholder="PICKUP"></S.Input>
            </S.BoxForm>

            <S.BoxForm>
              <S.Input placeholder="DROP"></S.Input>
            </S.BoxForm>

            <S.BoxForm>
              <S.Input placeholder="Enter Your Email"></S.Input>
            </S.BoxForm>

            <S.BtnSearch>{btnsearch}</S.BtnSearch>
          </S.BoxInputs>
        </S.BoxSlider>
        <S.BoxSlider>
          <S.Box>
            <S.BoxBook>
              <S.TitleBook>{titlebook}</S.TitleBook>
              <S.ParagraphNumber>{paragraphnumber}</S.ParagraphNumber>
            </S.BoxBook>

            <Carousel>
              <S.BoxImgTaxi>
                <S.ImgTaxi src={imgtaxitwo.url} alt="Image Taxi" />
              </S.BoxImgTaxi>
            </Carousel>
          </S.Box>
          <S.BoxDestino>
            <S.ParagraphBook>{paragraphbook}</S.ParagraphBook>
          </S.BoxDestino>

          <S.BoxInputs>
            <S.ParagraphEvery>{paragraphevery}</S.ParagraphEvery>

            <S.BoxForm>
              <S.Input placeholder="PICKUP"></S.Input>
            </S.BoxForm>
            <S.BoxForm>
              <S.Input placeholder="DROP"></S.Input>
            </S.BoxForm>
            <S.BoxForm>
              <S.Input placeholder="Enter Your Email"></S.Input>
            </S.BoxForm>
            <S.BtnSearch>{btnsearch}</S.BtnSearch>
          </S.BoxInputs>
        </S.BoxSlider>
      </S.ContainerHeader>
    </>
  );
}
