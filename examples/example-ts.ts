/// <reference path="./xxx.d.ts" />
export default namespace myNameSpace {
    // type highlight line
    type mytype = string
    export var value : mytype = "helloWorld"
    // class
    export class MyClass {
        private value: mytype
        public constructor( value: mytype ): void {
            this.value = value
        }
        public printValue(): mytype {
            console.log( this.value )
        }
    }
    
    // "new" a MyClass and call "print" method
    new MyClass( value ).print()
}
