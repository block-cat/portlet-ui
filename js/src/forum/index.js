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
}, -20);
