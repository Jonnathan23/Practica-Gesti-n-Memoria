export class ConverError extends Error {
    name: string
    constructor(message:string){
        super(message) 
        this.name = "ErrorConvert"
    }
}

export class DiferentLong extends Error{
    name: string
    constructor(message:string){
        super(message)
        this.name = "ErrorDiferentLong"
    }
}
