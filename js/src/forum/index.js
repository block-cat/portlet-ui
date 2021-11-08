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
}, -20);
