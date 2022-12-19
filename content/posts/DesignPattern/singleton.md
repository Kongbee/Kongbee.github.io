---
title: Singleton 패턴
date: 2022-12-14 10:12:64
category: "Design Pattern"
template: "post"
description: "하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴입니다."
draft: false
---

### 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴입니다.

---

## 장점

인스턴스를 다른 모듈들이 공유하며 사용하기 때문에 인스턴스를 생성할 때 드는 비용이 줄어든다.

## 단점

의존성이 높아지는 단점이 있다.

-> TDD를 할 때 **독립적인** 인스턴스를 만들기 어려워서 걸림돌이 된다.

## 단점 해결방법

**의존성 주입**을 통해 모듈간의 결합도를 느슨하게 만들어 해결할 수 있다.

---

## 코드

```JAVA

class  Singleton  {

private  static  class  singleInstanceHolder  {

private  static  final  Singleton INSTANCE =  new  Singleton();

}

public  static  Singleton  getInstance()  {

return singleInstanceHolder.INSTANCE;

}

}



public  class  HelloWorld{

public  static  void  main(String  []args){

Singleton a = Singleton.getInstance();

Singleton b = Singleton.getInstance();

System.out.println(a.hashCode());

System.out.println(b.hashCode());

if  (a == b){

System.out.println(true);

}

}

}

/*

705927765

705927765

true

*/

```

1. 클래스안에 클래스(Holder), static이며 중첩된 클래스인 singleInstanceHolder를

기반으로 객체를 선언했기 때문에 한 번만 로드되므로 싱글톤 클래스의 인스턴스는 애플리케이션 당 하나만 존재하며

클래스가 두 번 로드되지 않기 때문에 두 스레드가 동일한 JVM에서 2개의 인스턴스를 생성할 수 없습니다.

그렇기 때문에 동기화, 즉 synchronized를 신경쓰지 않아도 됩니다.

2. final 키워드를 통해서 read only 즉, 다시 값이 할당되지 않도록 했습니다.

3. 중첩클래스 Holder로 만들었기 때문에 싱글톤 클래스가 로드될 때 클래스가 메모리에 로드되지 않고

어떠한 모듈에서 getInstance()메서드가 호출할 때 싱글톤 객체를 최초로 생성 및 리턴하게 됩니다.
