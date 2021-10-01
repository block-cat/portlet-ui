/*
 * This function removes area for posting from end of posts on discussion page
 */

import { extend } from 'flarum/extend';
import PostStream from 'flarum/components/PostStream';

export default function () {
  extend(PostStream.prototype, 'view', function(view) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));

    // check if is set '1' for post reply
    if (defaultSettings.postReply) {
      // map all children of 'view'
      view.children.map((discuss) => {
        // check if exists post with key 'reply'
        if (discuss.key === 'reply') {
          // remove last element from 'view.children'
          view.children.pop();
        }
      });
    }
  });
};
