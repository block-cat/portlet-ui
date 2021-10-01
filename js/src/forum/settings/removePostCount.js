/*
 * This function removes number of posts
 * from every discussion on main page
 */

import { extend } from 'flarum/extend';
import DiscussionListItem from 'flarum/components/DiscussionListItem';

export default function () {
  extend(DiscussionListItem.prototype, 'view', function(view) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));

    // check if is set '1' for post count
    if (defaultSettings.postCount) {
      // remove last element from 'view.children[2].children'
      view.children[2].children.pop();
    }
  });
};
