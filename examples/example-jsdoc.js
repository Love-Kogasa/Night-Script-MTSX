// 一般注释
/**
 * @param {string} string - 注释
 * @returns {string}
 * ? 是不是太废物了()
 * TODO: 做的装逼一些
 */
function hello( string ){ return string }

/**
 * * 更装*的hello()
 * @param {...string} string - 更强大的hello
 * @return {string}
 * ! (什
 * NOTE: 奶奶滴，为什么不是114514层(
 */
function newHello( ...string ){
  return hello(
    hello(
      hello(
        string
        .join( " " )
      )
    )
  )
}
