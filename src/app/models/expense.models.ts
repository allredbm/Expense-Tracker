class Expense {
    _id:string;
    date:Date;
    name:string;
    type:string;
    amount:number;

    constructor(){
    
        this.date = new Date();
        this.name = " ";
        this.type = " ";
        this.amount = 0;


    }
}

export default Expense;