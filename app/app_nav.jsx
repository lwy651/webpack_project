import React from 'react';

function btn(){
	alert(123);
}

class Icon_nav extends React.Component{
	iconClick(){
		alert(651);
	}
	render(){
		return (<i id='icon_nav' onClick={btn}>
					<em></em>
				</i>);
	}
}
class App_nav extends React.Component{
	render(){
		return (
            <header>
                <div>
                    <h1 id='logo'>小五侠</h1>
                    <Icon_nav/>
                </div>
            </header>
    	);
	}
}
export default App_nav;