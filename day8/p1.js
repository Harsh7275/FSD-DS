async function orderfood(name,time) {
  return new Promise((resolve,reject)=>{
   setTimeout(() => {
   resolve("Order"+name+"Prepeard")
   }, time);
  })
}
async function restaurant() {
  console.log("Order Placed")
  const pizza =await orderfood("pizza",1000)
  console.log(pizza)
  const burger=await orderfood("burger",1000)
  console.log(burger)
  const noodles =await orderfood("noodles",1000)
  console.log(noodles)
  console.log("all order served")
}
restaurant()
