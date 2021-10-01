/*
 * This function removes leftside pane on discussion page
 */

import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';

export default function () {
  extend(DiscussionPage.prototype, 'oninit', function() {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    
    // check if is set '1' for pane
    if (defaultSettings.pane) {
      // disable pin button for pane 
      app.pane.disable();
    }
  });

  extend(DiscussionPage.prototype, 'oncreate', function() {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    
    // check if is set '1' for pane
    if (defaultSettings.pane) {
      for (const i of this.element.children) {
        // check classname for pane
        if (i.className === 'DiscussionPage-list') {
            // remove pane with discussions list
            i.remove();
        }
      }
    }
  });
};
