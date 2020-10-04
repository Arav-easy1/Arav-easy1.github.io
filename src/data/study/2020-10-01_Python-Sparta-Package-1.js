import React from "react";
import ReactMartdown from "react-markdown";

export default function App() {
  return (
    <div>
      <h1 id="파이썬-혼자놀기-패키지-1일차">파이썬 혼자놀기 패키지 1일차</h1>

      <p>
        추석연휴를 맞아 파이썬의 기초 문법과 파이썬으로 할 수 있는 간단한 기능을
        알려준다고 하여, 수강해보았다. <br />
        1일차에 주요하게 알려주는 것은 3가지로 요약할 수 있다.
      </p>

      <ol>
        <li>파이썬 기초 문법을 안다.</li>
        <li>원하는 페이지를 크롤링할 수 있다.</li>
        <li>이미지 url로부터 파일을 다운로드받을 수 있다.</li>
      </ol>

      <p>
        처음엔 PyCharm에서 새 프로젝트를 만들어 시작했다. 사전과제로 Python과
        PyCharm을 설치해야했는데, 코딩테스트 준비로 파이썬을 공부했던 적이
        있어서 이미 설치가 완료된 상태였다.
      </p>

      <h4 id="01-파이썬-기초문법">01. 파이썬 기초문법</h4>

      <ul>
        <li>##### 변수 &amp; 기본연산</li>
      </ul>

      <pre class="prettyprint">
        <code class="language-python hljs ">
          a = <span class="hljs-number">3</span>{" "}
          <span class="hljs-comment"># 3을 a에 넣는다</span>b = a{" "}
          <span class="hljs-comment"># a를 b에 넣는다</span>a = a +{" "}
          <span class="hljs-number">1</span>{" "}
          <span class="hljs-comment"># a+1을 다시 a에 넣는다</span>
          num1 = a*b{" "}
          <span class="hljs-comment">
            # a*b의 값을 num1이라는 변수에 넣는다
          </span>
          num2 = <span class="hljs-number">99</span>{" "}
          <span class="hljs-comment"># 99의 값을 num2이라는 변수에 넣는다</span>
          <span class="hljs-comment">
            # 변수의 이름은 마음대로 지을 수 있음!
          </span>
          <span class="hljs-comment">
            # 진짜 "마음대로" 짓는 게 좋을까? var1, var2 이렇게?
          </span>
        </code>
      </pre>

      <ul>
        <li>
          ##### 자료형 <br />
          <ul>
            <li>###### 숫자, 문자형</li>
          </ul>
        </li>
      </ul>

      <pre class="prettyprint">
        <code class="language-python hljs ">
          name = <span class="hljs-string">'bob'</span>{" "}
          <span class="hljs-comment">
            # 변수에는 문자열이 들어갈 수도 있고,
          </span>
          num = <span class="hljs-number">12</span>{" "}
          <span class="hljs-comment"># 숫자가 들어갈 수도 있고,</span>
          is_number = <span class="hljs-keyword">True</span>{" "}
          <span class="hljs-comment">
            # True 또는 False -&gt; "Boolean"형이 들어갈 수도 있습니다.
          </span>
          <span class="hljs-comment">#########</span>
          <span class="hljs-comment">
            # 그리고 List, Dictionary 도 들어갈 수도 있죠. 그게 뭔지는 아래에서!
          </span>
        </code>
      </pre>

      <ul>
        <li>###### 리스트형 (Javascript의 배열형과 동일)</li>
      </ul>

      <pre class="prettyprint">
        <code class="language-python hljs ">
          a_list = [] a_list.append(<span class="hljs-number">1</span>){" "}
          <span class="hljs-comment"># 리스트에 값을 넣는다</span>
          a_list.append([<span class="hljs-number">2</span>,
          <span class="hljs-number">3</span>]){" "}
          <span class="hljs-comment">
            # 리스트에 [2,3]이라는 리스트를 다시 넣는다
          </span>
          <span class="hljs-comment"># a_list의 값은? [1,[2,3]]</span>
          <span class="hljs-comment"># a_list[0]의 값은? 1</span>
          <span class="hljs-comment"># a_list[1]의 값은? [2,3]</span>
          <span class="hljs-comment"># a_list[1][0]의 값은? 2</span>
        </code>
      </pre>

      <ul>
        <li>###### Dictionary형 (Javascript의 dictionary형과 동일)</li>
      </ul>
    </div>
  );
}
