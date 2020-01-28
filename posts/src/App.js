import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import PostTable from "components/PostTable.js";
import { HashRouter, Route } from "react-router-dom";
import PostEdit from "components/PostEdit.js";
import PostStore from "stores/PostStore.js";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { observer } from "mobx-react";
import { observable } from "mobx";
import PostTab from "tabs/PostTab.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
	  style={{backgroundColor:"white"}}
      {...other}
    >
      {value === index && <Box p={3} style={{color:"black"}}>{children}</Box>}
    </Typography>
  );
}

var postStore = new PostStore();

@observer
export default class App extends React.Component{
	
	state = {
		value: 0,
	};
	
	handleChange = (event, value) => {
		this.setState({ value });
	};
	
			
	render() {
		const { value } = this.state;
		
		return (
			<HashRouter>
				<Route exact path="/">
					<div>
						<AppBar position="static">
						  <Tabs value={value} onChange={this.handleChange}>
							<Tab label="Posts"/>
							<Tab label="Users"/>
						  </Tabs>
						</AppBar>
						<TabPanel value={value} index={0}>
							<PostTable postStore={postStore}/>
						</TabPanel>
						<TabPanel value={value} index={1}>
							Item Two
						</TabPanel>
					</div>
				</Route>
				<Route path="/post/:number">
					{(props)=><PostEdit {...props} postStore={postStore}/>}
				</Route>
			</HashRouter>
		);
	}
}