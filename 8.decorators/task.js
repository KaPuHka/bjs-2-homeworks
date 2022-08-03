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


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
