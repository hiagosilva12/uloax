import { graphql, useStaticQuery } from "gatsby";
import React from "react";
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
      <div>
        <div>
          <section>
            <div>
              <div>
                <h1>{titleaddress}</h1>
                <p>{paragraphlorem}</p>
              </div>

              <div>
                <h1>{titlelinks}</h1>
                <a href="#">
                  <div>
                    <img src={imgbolinha.url} alt="Bolinha" />
                    <p>{btnhome}</p>
                  </div>
                  <div>
                    <img src={imgbolinha.url} alt="Bolinha" />
                    <p>{btnabout}</p>
                  </div>
                  <div>
                    <img src={imgbolinha.url} alt="Bolinha" />
                    <p>{btntaxi}</p>
                  </div>
                  <div>
                    <img src={imgbolinha.url} alt="Bolinha" />
                    <p>{btnbooking}</p>
                  </div>
                  <div>
                    <img src={imgbolinha.url} alt="Bolinha" />
                    <p>{btncontatos}</p>
                  </div>
                </a>
              </div>

              <div>
                <h1>{titlefollow}</h1>
                <a href="#">
                  <div>
                    <img src={iconfacebook.url} alt="Facebook" />
                    <p>Facebook</p>
                  </div>

                  <div>
                    <img src={icontwitter.url} alt="Twitter" />
                    <p>Twitter</p>
                  </div>

                  <div>
                    <img src={iconlinkedin.url} alt="Linkedin" />
                    <p>Linkedin</p>
                  </div>

                  <div>
                    <img src={iconyoutube.url} alt="Youtube" />
                    <p>Youtube</p>
                  </div>

                  <div>
                    <img src={iconinstagram.url} alt="Instagram" />
                    <p>Instagram</p>
                  </div>
                </a>
              </div>

              <div>
                <h1>Newusletter</h1>
                <input placeholder="Enter Your Email"></input>
                <button>{btnsubscribe}</button>
              </div>
            </div>
          </section>
        </div>
        <div>
          <div>
            <p>
              2019 All Rights Reserved.
              <p>Free html Templates</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
