/*
 * This function removes last action info from every discussion on main page
 */

import { extend } from 'flarum/extend';
import DiscussionListItem from 'flarum/components/DiscussionListItem';

export default function () {
  extend(DiscussionListItem.prototype, 'infoItems', function(items) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));

    // check if is set '1' for terminal post
    if (defaultSettings.terminalPost) {
      // check if exists 'terminalPost' item
      if (items.has('terminalPost')) {
        // remove 'terminalPost' item
        items.remove('terminalPost');
      }
    }
  });
};
