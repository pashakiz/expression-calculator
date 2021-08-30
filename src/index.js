function eval() {
    // Do not use eval!!!
    return;
}

const expressionCalculator = (expr) => {
  /*
    1) убрать лишние пробеллы из expr
        let exprArr = expr.trim().split(' ')

    2)
  */

  let bracketOpen = 0
  let bracketClose = 0

  if (expr.indexOf('/ 0') + 1) throw Error('TypeError: Division by zero.')

  for(let i = 0; i < expr.length; i++) {
      if (expr[i] === '(') bracketOpen++
      if (expr[i] === ')') bracketClose++
  }
  if (bracketOpen !== bracketClose) throw Error('ExpressionError: Brackets must be paired.')
  return new Function (`return ${expr}`)()
}

module.exports = {
    expressionCalculator
}
