import Ractive from 'ractive';
import MenuTmpl from '../../../tmpls/layout/menu.mustache';

export default Ractive.extend({
	template: MenuTmpl,
	data: {
		staticUserId: '1234-haha'
	}
});
