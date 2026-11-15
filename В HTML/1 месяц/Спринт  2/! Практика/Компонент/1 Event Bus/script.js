class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    //Код здесь
  }

  off(event, callback) {
    //Код здесь
  }

  emit(event, ...args) {
    //Код здесь
  }
}

const eventBus = new EventBus();

const handlerEvent1 = (arg1, arg2) => {
  console.log('first', arg1, arg2);
};

const handlerEvent2 = (arg1, arg2) => {
  console.log('second', arg1, arg2);
};

try {
	eventBus.emit('common:event-1', 42, 10);
} catch (error) {
	console.log(error); // Error: Нет события: common:event-1
}

eventBus.on('common:event-1', handlerEvent1);
eventBus.on('common:event-1', handlerEvent2);

eventBus.emit('common:event-1', 42, 10);
eventBus.off('common:event-1', handlerEvent2);

eventBus.emit('common:event-1', 84, 20);

/*
	* Вывод в консоли должен быть следующий:
Error: Нет события: common:event-1
first 42 10
second 42 10
first 84 20
*/