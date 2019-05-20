import GetMethod from '../getmethod'
import { message } from 'antd';
const getMethod =new GetMethod()
class Lists {
    /**
     * 使用async 写法让代码结构趋于扁平化
     */
 static async getArticleLists(){
    let listsData =await getMethod.http('/lists')
    if(!listsData.data.list){
        message.error("获取文章列表失败")
        return []
    }
    console.log("listsData.data.list",listsData.data.list)
    class Node {
      constructor(data,left,right){
        this.data=data
        this.left=left
        this.right=right
        this.show = function (){
          return this.data
        }
      }
    }
    class Tree{
      constructor(root){
        this.root=null
        this.inOrderOut=[]//储存从小到大的结果
        this.reverseOrderOut=[] //储存从大到小的结果
      }
      insert(data){
        let newNode = new Node(data,null,null)
        let parent
        if(this.root==null){
          this.root=newNode
        }else{
          let current = this.root
          while(true){
            parent = current
            /**
             * @data.star 新节点点赞数
             * @current.star 根节点的点赞数
             */
            if(data.star<current.data.star){
              //左节点小于右节点
                current=current.left
                if(current==null){
                  //值进入当前节点的左边
                  parent.left =newNode;
                  break;
                }
            }else{
              current = current.right
              if(current==null){
                parent.right=newNode
                break;
              }
            }
          }
        }
      }
      inOrder(newNode){
         if(newNode !=null){
           this.inOrder(newNode.left)
           this.inOrderOut.push(newNode.show())
           this.inOrder(newNode.right)
         }
      }
      reverseOrder(newNode){
        if(newNode !=null){
          this.reverseOrder(newNode.right)
          this.reverseOrderOut.push(newNode.show())
          this.reverseOrder(newNode.left)
        }
      }
    }
    let starTree = new Tree()
    listsData.data.list.map(value=>starTree.insert(value))
    starTree.inOrder(starTree.root)
    starTree.reverseOrder(starTree.root)
    console.log(starTree)
    console.log("inOrder")
    console.log(starTree.inOrderOut)
    console.log("reverseOrder")
    console.log(starTree.reverseOrderOut)
    return listsData.data.list
  }
}
export default Lists