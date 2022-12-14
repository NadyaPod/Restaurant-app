class Products {
  constructor (products) {
    this.products = products;
  }
  getProductById (id) {
    const products = this.products.filter((item) => item.id === id);
    if (products.length === 1) {
      return products[0];
    } else {
      throw new Error("Unable to determine product by ID");
    }
  }
  getPriceById (id) {
    return +this.getProductById(id).price;
  }
  getProducts () {
    return this.products;
  }
}

export const products = new Products (
  [
    {
      "id": "1",
      "name":"Устрицы по рокфеллеровски",
      "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
      "price":"2700",
      "weight":"500 г.",
      "img":"img/dish-01.png"
    },
    {
      "id": "2",
      "name":"Свиные ребрышки на гриле с зеленью",
      "description":"Не следует, однако забывать, что реализация намеченных плановых",
      "price":"1600",
      "weight":"750 г.",
      "img":"img/dish-02.png"
    },
    {
      "id": "3",
      "name":"Креветки по-королевски в лимонном соке",
      "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      "price":"1820",
      "weight":"7 шт.",
      "img":"img/dish-03.png"
    },
    {
      "id": "4",
      "name":"Стейк свинины",
      "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
      "price":"2300",
      "weight":"1600 г.",
      "img":"img/dish-01.png"
    },
    {
      "id": "5",
      "name":"Стейк говяжий со соусом",
      "description":"Не следует, однако забывать, что реализация намеченных плановых",
      "price":"1100",
      "weight":"900 г.",
      "img":"img/dish-01.png"
    },
    {
      "id": "6",
      "name":"Салат Цезарь",
      "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      "price":"450",
      "weight":"1 шт.",
      "img":"img/dish-02.png"
    },
    {
      "id": "7",
      "name":"Устрицы по рокфеллеровски",
      "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
      "price":"2700",
      "weight":"500 г.",
      "img":"img/dish-03.png"
    },
    {
      "id": "8",
      "name":"Свиные ребрышки на гриле с зеленью",
      "description":"Не следует, однако забывать, что реализация намеченных плановых",
      "price":"1600",
      "weight":"750 г.",
      "img":"img/dish-01.png"
    },
  ]
)

export const textContent = "Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений."