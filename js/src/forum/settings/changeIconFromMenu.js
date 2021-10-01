/*
 * This function change icon in sidebar menu for 'allDiscussions'
 */

import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

export default function () {
  extend(IndexPage.prototype, 'navItems', function(items) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    const params = app.search.stickyParams();
    
    // check if is set icon for main page menu
    if (defaultSettings.allDiscussionsIcon !== "") {
      // check if exists 'allDiscussions' item
      if (items.has('allDiscussions')) {
        // change 'allDiscussions' item
        items.replace(
          'allDiscussions',
          LinkButton.component(
            {
              href: app.route('index', params),
              // change the icon...
              icon: defaultSettings.allDiscussionsIcon,
            },
            app.translator.trans('core.forum.index.all_discussions_link')
          ),
          100
        );
      }
    }
  });
};
