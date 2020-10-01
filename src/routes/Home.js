import React from "react";
import "./Home.css";
import Profile from "../data/img/profile-arav.png";
import githubIcon from "../data/img/github_icon.png";

function Home() {
  return (
    <section class="container">
      <div class="home">
        <div class="home_about">
          <img src={Profile} alt="profile-arav" title="profile-arav" />
          <div class="about_text">
            <h1 class="about_name">ARAV</h1>
            <p>
              개발자로써의 ARAV의 성장과정을 담아가고 싶은 블로그. 내가 배운 것,
              내가 한 것, 하고 싶은 것 등을 이곳에 올리고싶다. ARAV라는 이름은
              내가 처음 개발을 배우게 된 학원에서 친구들이 지어준 별명이다. 뜻은
              평화로운, 지혜(peaceful, wisdom). 실명인 이지원(a.k.a. Easy1)보다
              그 당시에 더 자주 불렸다.
            </p>
            <p>
              This is a blog that I want to contain my growth as a developer. I
              want to post what I have learned, what I have made, and what I
              want to do. ARAV is a nickname my friends gave me at the academy
              where I first learned to develop. It means peaceful and wisdom. It
              was called more often at the time than my real name, Lee
              Jiwon(a.k.a. Easy1).
            </p>
            <p>
              Das ist ein Blog, in dem ich mein Werdegang als Entwickler
              aufschreiben möchte. ich möchte schreiben doch auf, was ich
              gelernt habe, was ich gemacht habe, und was ich machen möchte.
              ARAV ist ein Spitzname, den mir meine Freunde an der Akademie
              gegeben haben, an der ich zum ersten Mal gelernt habe, mich zu
              entwickeln. Es bedeutet friedlich und Weisheit. Es wurde zu der
              Zeit öfter genannt als mein richtiger Name, Lee Jiwon(a.k.a.
              Easy1).
            </p>
            <p>
              you can find my source code at here:
              <a href="https://github.com/arav-easy1">
                <img src={githubIcon} alt="github-icon" />
                https://github.com/arav-easy1
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
