function cachingDecoratorNew(func) {
 
  const cache = [];

  return (...args) => {
      const hash = args.join(',');
      let result = cache.find(item => { return item.hash === hash});
      let answer;
    
      if (result === undefined) {
        let value = func(...args);
        answer = "Вычисляем: " + value;
        
        cache.push({hash: hash, value: value}) ;
        if (cache.length > 5) {
          cache.shift();
        }
      } else {
        answer = "Из кэша: " + result.value;
      }
      console.log(answer);
      return answer;
  };
}


function debounceDecoratorNew(func, ms, first = true) {
  let timerId;
  let me = this;
  me.first = first;
  
  return function (...args) {  
      if (me.first) {
        func.apply(me, args);
        me.first = false;
      } else {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          func.apply(me, args);
        }, ms);
      }
      
  };
}

function debounceDecorator2(func, ms, first = true) {
  let timerId;
  let me = this;
  me.first = first;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    if (me.first) {
      func.apply(me, args);
      me.first = false;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(me, args);
      }, ms);
    }
    console.log(wrapper.count);
  }
  
  return wrapper;
}
