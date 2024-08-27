function createCatalog() {
    return {
      /*
       * Данное свойство будет списком (хранилещем) всех товаров,
       * которые будут попадать в Каталог.
       */
      goods: [],
  
      /*
       * addGood. Метод (функция), который добавляет новый товар в Каталог
       */
      addGood: function (id, name, description, sizes, price, available) {
        this.goods[this.goods.length] = {
          id,
          name,
          description,
          sizes,
          price,
          available,
        };
      },
  
      /*
       * getGood. Метод (функция), который возвращает товар по идентификатору.
       * Если в метод передан идентификатор, а в Каталоге нет товара с таким id,
       * то метод вернет null.
       */
      getGood: function (id) {
          for (let i = 0; i < this.goods.length; i++) {
              const good = this.goods[i];
  
              if (good.id === id) {
                  return good;
              }
          }
  
          return null;
      },
    };
  };
      
   
  function createCart() {
    return {
      /*
       * Данное свойство будет списком (хранилещем) всех товаров (заказов),
       * которые будут попадать в Корзину.
       */
      orders: [],
  
      /*
       * addGood. Метод (функция), который добавляет новый товар в Корзину
       */
      addGood: function (order) {
        this.orders[this.orders.length] = order;
      },
  
      /*
       * removeGood. Метод (функция), который по идентификатору товара
       * производит поиск товара в списке. И если находит, то удаляет
       * его из списка.
       */
      removeGood: function (goodId) {
        let goodIndex = -1;
  
        for (let i = 0; i < this.orders.length; i++) {
          const order = this.orders[i];
  
          if (order.good.id === goodId) {
            goodIndex = i;
  
            break;
          }
        }
  
        if (goodIndex > -1) {
          this.orders.splice(goodIndex, 1);
        }
      },
  
      /*
       * clearCart. Метод (функция), который очищает Корзину от всех
       * товаров (заказов), которые содержатся в ней. Для этого в свойство
       * orders присваивается новый пустой список.
       */
      clearCart: function () {
        this.orders = [];
      },
  
      /*
       *  getTotalAmountAndTotalSumm. Метод (функция), который рассчитывает
       *  общее количество всех товаров и общую стоимость всех товаров.
       */
      getTotalAmountAndTotalSumm: function () {
        let totalAmount = 0;
        let totalSumm = 0;
  
        for (let i = 0; i < this.orders.length; i++) {
          const order = this.orders[i];
  
          totalAmount += order.amount;
          totalSumm += order.amount * order.good.price;
        }
  
        return {
          totalAmount,
          totalSumm,
        };
      },
    };
  };
  export { createCatalog, createCart };