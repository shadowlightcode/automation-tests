class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value; 
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        const result = this.getResult();
        this.value = result + value;
        return this; 
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        const result = this.getResult();
        this.value = result - value;
        return this; 
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        const result = this.getResult();
        this.value = result * value;
        return this; 
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0) {
            throw new Error("Division by zero is not allowed");
        } else {
            const result = this.getResult();
            this.value = result/value;
            return this;
        }
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        const result = this.getResult();
        this.value = result ** value;
        return this; 
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}

const actions = ["Calculator", "divide", "divide", "divide", "getResult"];
const values =  [10, -1, -1, -1];
const calc = new Calculator(10);

calc.divide(10).divide(-1).divide(-1).divide(-1).getResult();