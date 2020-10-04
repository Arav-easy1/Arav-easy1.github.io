# 파이썬 혼자놀기 패키지 1일차

추석연휴를 맞아 파이썬의 기초 문법과 파이썬으로 할 수 있는 간단한 기능을 알려준다고 하여, 수강해보았다.
1일차에 주요하게 알려주는 것은 3가지로 요약할 수 있다.

1. 파이썬 기초 문법을 안다.
2. 원하는 페이지를 크롤링할 수 있다.
3. 이미지 url로부터 파일을 다운로드받을 수 있다.

처음엔 PyCharm에서 새 프로젝트를 만들어 시작했다. 사전과제로 Python과 PyCharm을 설치해야했는데, 코딩테스트 준비로 파이썬을 공부했던 적이 있어서 이미 설치가 완료된 상태였다.

#### 01. 파이썬 기초문법

- ##### 변수 & 기본연산

```python
a = 3 # 3을 a에 넣는다
b = a # a를 b에 넣는다
a = a + 1 # a+1을 다시 a에 넣는다
num1 = a*b # a*b의 값을 num1이라는 변수에 넣는다
num2 = 99 # 99의 값을 num2이라는 변수에 넣는다
# 변수의 이름은 마음대로 지을 수 있음!
# 진짜 "마음대로" 짓는 게 좋을까? var1, var2 이렇게?
```

- ##### 자료형
  - ###### 숫자, 문자형

```python
name = 'bob' # 변수에는 문자열이 들어갈 수도 있고,
num = 12 # 숫자가 들어갈 수도 있고,
is_number = True # True 또는 False -> "Boolean"형이 들어갈 수도 있습니다.
#########
# 그리고 List, Dictionary 도 들어갈 수도 있죠. 그게 뭔지는 아래에서!
```

- ###### 리스트형 (Javascript의 배열형과 동일)

```python
a_list = []
a_list.append(1) # 리스트에 값을 넣는다
a_list.append([2,3]) # 리스트에 [2,3]이라는 리스트를 다시 넣는다
# a_list의 값은? [1,[2,3]]
# a_list[0]의 값은? 1
# a_list[1]의 값은? [2,3]
# a_list[1][0]의 값은? 2
```

- ###### Dictionary형 (Javascript의 dictionary형과 동일)

```python
a_dict = {}
a_dict = {'name':'bob','age':21}
a_dict['height'] = 178
# a_dict의 값은? {'name':'bob','age':21, 'height':178}
# a_dict['name']의 값은? 'bob'
# a_dict['age']의 값은? 21
# a_dict['height']의 값은? 178
```

- ###### Dictionary 형과 List형의 조합

```python
'people = [{'name':'bob','age':20},{'name':'carry','age':38}]
# people[0]['name']의 값은? 'bob'
# people[1]['name']의 값은? 'carry'
person = {'name':'john','age':7}
people.append(person)
# people의 값은? [{'name':'bob','age':20},{'name':'carry','age':38},{'name':'john','age':7}]
# people[2]['name']의 값은? 'john'
```

- ##### 조건문
  - ###### if / else로 구성

```python
if age > 20:
print('성인입니다') # 조건이 참이면 성인입니다를 출력
else:
print('청소년이에요') # 조건이 거짓이면 청소년이에요를 출력
is_adult(30)
# 무엇이 출력될까요?
```
