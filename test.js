var operation = { none: 'none', plus: 'plus', minus: 'minus', multiply: 'multiply', divide: 'divide' }
var activity = { none: 'none', number: 'number', operation: 'operation'}

var calculator = function (){
    let result = null
    let invalid = false
    let lastOperation = operation.none
    let lastActivity = activity.none

    function calculate(op, value) {
        if(value) {
            //its an operand
            if(lastActivity === activity.number) {
                invalid = true
            } else {
                lastActivity = activity.number
                switch(lastOperation) {
                    case operation.plus:
                        result += value
                        break
                    case operation.minus:
                        result -= value
                        break
                    case operation.multiply:
                        result *= value
                        break
                    case operation.divide:
                        result /= value
                        break
                        
                    default:
                        result = value
                }
                lastOperation = operation.number
            }
        }else {
            //its an operation
            if(lastActivity === activity.none || lastActivity === activity.operation) {
                invalid = true
            } else {
                lastActivity = activity.operation
                lastOperation = op
            }
        }
    }
    this.print = function () {
        let noresult = invalid || lastOperation !== operation.number
        console.log(noresult ? 'Invalid operation' : result)
    }
    this.one = function (){
        calculate(null, 1)
        return this
    }
    this.two = function () {
        calculate(null, 2)
        return this
    }
    this.three = function () {
        calculate(null, 3)
        return this
    }
    this.four = function () {
        calculate(null, 4)
        return this
    }
    this.five = function () {
        calculate(null, 5)
        return this
    }
    this.six = function () {
        calculate(null, 6)
        return this
    }

    this.seven = function () {
        calculate(null, 6)
        return this
    }

    this.eight = function () {
        calculate(null, 6)
        return this
    }

    this.nine = function () {
        calculate(null, 6)
        return this
    }

    this.plus = function() {
        calculate(operation.plus)
        return this
    }

    this.minus = function() {
        calculate(operation.minus)
        return this
    }

    this.times = function() {
        calculate(operation.multiply)
        return this
    }

    this.divideBy = function() {
        calculate(operation.divide)
        return this
    }

    this.reset = function() {
        result = null
        lastOperation = operation.none
        lastActivity = activity.none
        return this
    }
}

var calc = new calculator()

calc.reset().one().print()
calc.reset().three().times().two().divideBy().four().print()
calc.reset().two().one().print()