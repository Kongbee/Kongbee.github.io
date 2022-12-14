---
title: TCP/IP 4계층 모델
date: 2022-12-20 10:50:00

template: "post"
slug: "/posts/Network/tcp-ip"
draft: false

category: "Network"
tags:
  - "Network"
description: "네트워크에서 사용되는 통신 프로토콜의 집합으로 계층들은 프로토콜의 네트워킹 범위에 따라 4개의 추상화 계층으로 구성된다."
---

### 네트워크에서 사용되는 통신 프로토콜의 집합으로 계층들은 프로토콜의 네트워킹 범위에 따라 4개의 추상화 계층으로 구성된다.

---

## 구조

![OS 7계층 - TCP/IP 4계층](https://images.velog.io/images/jehjong/post/68e38b79-1117-4d48-b7c9-e04454205daa/image.png)

### 1. 애플리케이션 계층 (Application)

: 응용 프로그램이 사용되는 프로토콜 계층이다.

### 2. 전송 계층 (Transport)

: 송신자와 수신자를 연결하는 통신 서비스를 제공한다.  
: 연결 지향 데이터 스트림 지원, 신뢰성, 흐름 제어를 제공할 수 있다.  
: 애플리케이션과 인터넷 계층 사이의 데이터가 전달될 때 중계 역할을 한다.

- **TCP**  
  : 패킷 사이 순서 보장  
  : 연결지향 프로토콜 사용해 연결 => 신뢰성 구축 => 수신 여부 확인  
  : **가상회선 패킷 교환 방식** 사용

- **UDP**  
  : 순서 보장하지 않음  
  : 수신 여부 확인하지 않음  
  : **단순 데이터그램 패킷 교환 방식**
                 