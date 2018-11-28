import Ractive from 'ractive';
import HomePageTmpl from '../../tmpls/pages/home-page.html';

export default Ractive.extend({
    template: HomePageTmpl,
    oninit()  {
        console.log('7 -- HomePage init', this.get('routeParams'));
    },
    onteardown() {
        console.log('HomePage teardown');
    }
});
