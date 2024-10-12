#!/usr/bin/node
// Please Run It In Node RunTime ↑
(async function( ...args ){
   args.slice(2).join( " " ).print()
   String.prototype.print = ()=>{
      console.info( `[ Info : ${this} ]` )
      throw new Error( "An Error" )
   }
})( process.argv )
.catch( console.error )
