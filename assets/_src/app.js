import '../style/index.scss';
import Ractive from 'ractive';
import Router from 'ractivejs-router';
// to avoid debug info
// Ractive.DEBUG = false;

// import AppTmpl from '../tmpls/app.mustache';
import Menu from './components/layout/menu';
import Footer from './components/layout/footer';
import routesConfig from './routes/router';

const App = new Ractive({
	el: '#ractiveApp',
	template: require('../tmpls/app.mustache'),
	components: {
		Menu,
		Router,
		Footer
	},
	data: {
		routesConfig
	},
    oninit(){
        console.log('App init');
    },
    onrender(){
        console.log('App Render');
        console.log('39 -- routesConfig: ', routesConfig);
    },
    oncomplete(){
        console.log('App Complete');
    }
});

export default App;
