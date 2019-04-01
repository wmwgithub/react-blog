let globalArray =['new','new','new','old','old']
let arr1=[],arr2=[]
function getRandomArray(){
  for(let i=0;i<5;i++){
    arr1[i]=[i]
  }
  for(let i=0;i<5;i++){
    let index=Math.floor(Math.random()*(5-i))//产生随机数
     arr2[i]=arr1[index]
    arr1.splice(index,1)
  }
  // console.log(arr2)
  return arr2
}
function count(){
  let newglobal=0;
  for(let i=0;i<10000000;i++){
  let randomArray=getRandomArray()
    if(globalArray[randomArray[1]]=='new'){
      newglobal++
    }
  }
  console.log(newglobal)
}

count()
