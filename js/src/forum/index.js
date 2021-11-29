import addEMoldovaButton from './settings/addEMoldovaButton';
import changeIconFromMenu from './settings/changeIconFromMenu';
import changePostControls from './settings/changePostControls';
import removeActionItems from './settings/removeActionItems';
import removeLeftsideMenu from './settings/removeLeftsideMenu';
import removePane from './settings/removePane';
import removePostCount from './settings/removePostCount';
import removeReplyPlaceholder from './settings/removeReplyPlaceholder';
import removeRightsideMenu from './settings/removeRightsideMenu';
import removeSidebarItems from './settings/removeSidebarItems';
import removeTerminalPost from './settings/removeTerminalPost';
import removeToolbar from './settings/removeToolbar';
import changePaths from './settings/changePaths';
//vasia
import sidebarItems from './ui/sidebarItems.js';
import CardItem from './ui/CardItem.js';
import ActionItems from './ui/ActionItems.js';
import HeaderSec from './ui/HeaderSec.js';
import Editor from './ui/Editor.js';

// tudor
// import { override } from "flarum/extend";
// import WelcomeHero from "flarum/components/WelcomeHero";
// import Welcome from './ui/Welcome';

app.initializers.add('block-cat/portlet-ui', () => {
  changePaths();
  changeIconFromMenu();
  removeLeftsideMenu();
  removeToolbar();
  removeActionItems();
  removeRightsideMenu();
  removeSidebarItems();
  changePostControls();
  removePostCount();
  addEMoldovaButton();
  removeReplyPlaceholder();
  removeTerminalPost();
  removePane();
  //vasia
  sidebarItems();
  CardItem();
  ActionItems();
  HeaderSec();
  Editor();
  //tudor
  // override(WelcomeHero.prototype, "view", (el) => {
  //   // console.log(this.hidden);
  //   return Welcome.component();
  // });

}, -20);
