---
title: Factory 패턴
date: 2022-12-14 10:12:70

category: "Design Pattern"
description: "객체를 사용하는 코드에서 객체 생성 부분을 떼어내 추상화한 패턴"

slug: "/posts/DesignPattern"
template: "post"
draft: false
---

### 객체를 사용하는 코드에서 객체 생성 부분을 떼어내 추상화한 패턴

### 상위 클래스가 중요한 뼈대를 결정, 하위 클래스에서 객체 생성에 관한 구체적인 내용을 결정하는 패턴

---

## 장점

- 상위 클래스에서는 생성 방식에 대해 알 필요가 없기 때문에 더 많은 유연성을 가진다.
- 생성 로직이 따로 떼어져 있어 유지 보수성이 증가된다.

  ***

## 코드

```JAVA

abstract class Coffee {

public abstract int getPrice();

@Override

public String toString(){

return "Hi this coffee is "+ this.getPrice();

}

}

class CoffeeFactory {

public static Coffee getCoffee(String type, int price){

if("Latte".equalsIgnoreCase(type)) return new Latte(price);

else if("Americano".equalsIgnoreCase(type)) return new Americano(price);

else{

return new DefaultCoffee();

}

}

}

class DefaultCoffee extends Coffee {

private int price;

public DefaultCoffee() {

this.price = -1;

}

@Override

public int getPrice() {

return this.price;

}

}

class Latte extends Coffee {

private int price;

public Latte(int price){

this.price=price;

}

@Override

public int getPrice() {

return this.price;

}

}

class Americano extends Coffee {

private int price;

public Americano(int price){

this.price=price;

}

@Override

public int getPrice() {

return this.price;

}

}

public class HelloWorld{

public static void main(String []args){

Coffee latte = CoffeeFactory.getCoffee("Latte", 4000);

Coffee ame = CoffeeFactory.getCoffee("Americano",3000);

System.out.println("Factory latte ::"+latte);

System.out.println("Factory ame ::"+ame);

}

}

/*

Factory latte ::Hi this coffee is 4000

Factory ame ::Hi this coffee is 3000

*/

```

-> 이번 프로젝트에서 아파트 거래정보, 경매 거래정보를 따로 만들었었는데 이 부분을 거래정보 상위클래스와 세부 하위클래스로 나눴어도 좋았을 것 같다는 생각이 든다.
