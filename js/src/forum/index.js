//vasia
import sidebarItems from './ui/sidebarItems.js';
import CardItem from './ui/CardItem.js';
import ActionItems from './ui/ActionItems.js';
import HeaderSec from './ui/HeaderSec.js';
import Editor from './ui/Editor.js';
import Navigation from './ui/Navigation.js';

// tudor
import changeWelcomeHero from './settings/changeWelcomeHero';

app.initializers.add('block-cat/portlet-ui', () => {
  //vasia
  sidebarItems();
  CardItem();
  ActionItems();
  HeaderSec();
  Editor();
  Navigation();
  //tudor
  changeWelcomeHero();
}, -20);
