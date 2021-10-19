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
import sidebarItems from './settings/sidebarItems.js';
import CardItem from './settings/CardItem.js';
import ActionItems from './settings/ActionItems.js';
// added by BlockCat
import addArticleModal from './settings/addArticleModal';
import addReplyButtonModal from './settings/addReplyButtonModal';
import removeArticleHeaderModal from './settings/removeArticleHeaderModal';

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
  // added by BlockCat
  addArticleModal();
  removeArticleHeaderModal();
  addReplyButtonModal();
}, -20);
