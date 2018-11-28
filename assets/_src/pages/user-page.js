import Ractive from 'ractive';
import UserPageTmpl from '../../tmpls/pages/user-page.html';

const UserPage = Ractive.extend({
	template: UserPageTmpl
});

export default UserPage;
