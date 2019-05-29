import { ArticleCard } from "../../components";
import {  search } from "../../method";

class SearchCard extends ArticleCard{
    constructor(props){
        super();
    }
    /**
     * 只有当props引起的更新过程才会被调用，State引起的更新不会触发该方法执行
     * @param {是指父组件传递给子组件的新的props 然而 this.props 是指子组件现有的props react 比较这两个组件是否相等从而决定是否要更新子组件} nextProps 
     */
    componentDidMount(){
        this.getLists(this.props.title)
    }
    componentWillReceiveProps(nextProps){
        this.getLists(nextProps.title)
    }
    async getLists(title){
         let articlelists= await search(title)
         console.log(articlelists)
        //  console.log(articlelists)
         this.setState({
           acticleArray:articlelists,
         })
       }
}
export default SearchCard