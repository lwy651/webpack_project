import React from 'react';
class Cell_item extends React.Component{
	render(){
        console.log(this.props.text.name);
		return (
            <li>
                {this.props.text.name}
            </li>
    	);
	}
}
class Create_items extends React.Component{
    render(){
        var rows = [];
        // var commentValue = this.props.data.forEach(function(product) {
        //     rows.push(<Cell_item key={product.name} text={product}/>);
        // });
        rows = [<Cell_item text={{name:"651"}}/>,<Cell_item text={{name:"651"}}/>]
        console.log(rows);
		return (
            <ul className="list list_preferential" id="post_list_preferential">
                {rows}
            </ul>
    	);
	}
}
class List_preferential extends React.Component{
	render(){
		return (
            <ul className="list list_preferential" id="post_list_preferential">
                <Create_items data={[{"name":"xiao1"},{"name":"xiao2"},{"name":"xiao3"}]} />
            </ul>
    	);
	}
}
export default List_preferential;