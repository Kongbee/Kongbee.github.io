---
title: Strategy 패턴
date: 2022-12-14 11:12:68
category: "Design Pattern"
template: "post"
description: "객체의 행위를 바꾸고 싶은 경우 직접 수정하지 않고 전략이라고 부르는 캡슐화한 알고리즘을 컨텍스트 안에서 바꿔주면서 상호 교체가 가능하게 만드는 패턴"
draft: false
---

### 객체의 행위를 바꾸고 싶은 경우 직접 수정하지 않고 전략이라고 부르는 캡슐화한 알고리즘을 컨텍스트 안에서 바꿔주면서 상호 교체가 가능하게 만드는 패턴

---

## 장점

- **전략 사용자(context)의 코드 변경 없이 새로운 전략을 추가 할 수 있다.**

  - 이를 통해 if - else 분기를 제거할 수 있다.

  - if - else 분기를 제거하면, 단일 책임 원칙을 준수하기 더 수월해진다.

- **확장에 유리한 코드를 작성할 수 있다.**

  - 새롭게 필요한 전략 클래스를 쉽게 만들 수 있다.

  - 개방 폐쇄 원칙을 준수한 코드 작성이 가능하다.

- **런타임에 전략을 변경시킬 수 있다.**

## 단점

- **어플리케이션에 들어가는 모든 전략을 알고 있어야 한다.**

  - 클래스로 분리한 각 전략들이 어느 상황에 사용되어야 할 지 알고 있어야 한다.

  - 이 같은 특성이 어쩌면 유지보수를 더 힘들게 할 수도 있다.

- **전략을 추상화한 인터페이스가 효율적이지 못할 수 있다.**

  - 어떤 전략 콘크리트 객체에서는 사용하지 않는 메서드들 역시 전략 인터페이스에 정의해 주어야 한다.

  ***

## 코드

```JAVA

interface PaymentStrategy {

public void pay(int amount);

}

class KAKAOCardStrategy implements PaymentStrategy {

private String name;

private String cardNumber;

private String cvv;

private String dateOfExpiry;

public KAKAOCardStrategy(String nm, String ccNum, String cvv, String expiryDate){

this.name=nm;

this.cardNumber=ccNum;

this.cvv=cvv;

this.dateOfExpiry=expiryDate;

}

@Override

public void pay(int amount) {

System.out.println(amount +" paid using KAKAOCard.");

}

}

class LUNACardStrategy implements PaymentStrategy {

private String emailId;

private String password;

public LUNACardStrategy(String email, String pwd){

this.emailId=email;

this.password=pwd;

}

@Override

public void pay(int amount) {

System.out.println(amount + " paid using LUNACard.");

}

}

class Item {

private String name;

private int price;

public Item(String name, int cost){

this.name=name;

this.price=cost;

}

public String getName() {

return name;

}

public int getPrice() {

return price;

}

}

class ShoppingCart {

List<Item> items;

public ShoppingCart(){

this.items=new ArrayList<Item>();

}

public void addItem(Item item){

this.items.add(item);

}

public void removeItem(Item item){

this.items.remove(item);

}

public int calculateTotal(){

int sum = 0;

for(Item item : items){

sum += item.getPrice();

}

return sum;

}

public void pay(PaymentStrategy paymentMethod){

int amount = calculateTotal();

paymentMethod.pay(amount);

}

}

public class HelloWorld{

public static void main(String []args){

ShoppingCart cart = new ShoppingCart();

Item A = new Item("kundolA",100);

Item B = new Item("kundolB",300);

cart.addItem(A);

cart.addItem(B);

// pay by LUNACard

cart.pay(new LUNACardStrategy("kundol@example.com", "pukubababo"));

// pay by KAKAOBank

cart.pay(new KAKAOCardStrategy("Ju hongchul", "123456789", "123", "12/01"));

}

}

/*

400 paid using LUNACard.

400 paid using KAKAOCard.

*/

```
