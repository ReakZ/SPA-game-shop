export const sumTotalPrice=(items)=>items.reduce((sum,item)=>sum+=Number.parseInt(item.price),0)

export function contains(where, what) {
  if (!what) { // условие #1
      return true;
  }
  for (var i = 0; i < what.length; i++) {
      for (var j = 0; j < where.length; j++) {
           if (what[i] === where[j]) { // вообще есть indexOf, но непонятно, под какие платформы это пишется, так что по старинке
               break;
           }
           if (j === where.length - 1) {
               // мы дошли до конца массива, и так и не нашли вхождение - значит, у нас есть элемент, который не входит в where, и нужно вернуть false
               return false;
           }
      }
  }
  // ни для одного из элементов не сработал return false, а значит, все они найдены
  return true;
}