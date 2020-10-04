import React, { Component } from "react";
import "./Studies.css";
import Study01 from "../data/study/2020-10-01_Python-Sparta-Package-1";

class Studies extends Component {
  state = {
    Studies: [
      {
        id: 1,
        title: "파이썬 혼자놀기 패키지 1일차",
        today: "2020.10.01",
        text:
          "추석 연휴동안 파이썬의 기초 문법과 간단하게 다룰 수 있는 방법을 알려준다기에 무료 강좌를 신청했다. 1일차에는 파이썬 기초 문법을 알려주고, 또 원하는 페이지를 크롤링하는 법을 알려주면서 이미지 url등으로 부터 파일을 다운로드 받는 법도 알려주었다. ",
        studytype: ["Python"],
      },
      {
        id: 2,
        title: "파이썬 혼자놀기 패키지 2일차",
        today: "2020.10.03",
        text: "정말 재밌네여ㅋㅋ",
        studytype: ["Python"],
      },
    ],
  };
  render() {
    const studies = this.state.Studies;
    // const studytype = ["Python"];
    return (
      <div className="studys">
        {/* <div className="studytype">
          {studytype.map((type, index) => (
            <li key={index} className="types">
              {type}
            </li>
          ))}
        </div> */}
        {studies.reverse().map((study) => (
          <div className="study">
            <h3 className="study_title">{study.title}</h3>
            <h5 className="study_date">{study.today}</h5>
            <p className="study_text">{study.text}</p>
          </div>
        ))}
        <div className="study_md">
          <Study01 />
        </div>
      </div>
    );
  }
}

export default Studies;
