---
title: 자료구조
date: 2023-01-10 08:34:70

category: "Data Structure"
description: ""

template: "post"
draft: false
---

## Array vs ArrayList

Array와 ArrayList의 차이점 == 불변 or 가변  

ArrayList의 가변적 요소는 어떻게 구현이 되는가?
- 요소들이 처음 할당한 메모리(pre-allocation) 이상으로 많아지면 resizing을 한다
- 100개의 메모리가 다 찼다면 -> 200개 크기의 메모리 생성 -> 기존 100개 복사 -> 101부터 순차적 추가
