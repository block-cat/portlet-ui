/*
 * This function removes rightside menu from discussion page
 */

import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';

export default function () {
  extend(DiscussionPage.prototype, 'view', function(view) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    
    // check if is set '1' for dicussion page menu
    if (defaultSettings.discussionMenu) {
      try {
        // remove first element from 'view.children[1].children[1].children'
        view.children[1].children[1].children.shift();
      } catch {}
    }
  });
};
