/*
 * This function duplicates Post Controls on header
 * if posts are very large and merge Discussion Controls
 * with Post Controls for first post in discussion
 */

import { extend, override } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import PostControls from 'flarum/utils/PostControls';
import Dropdown from 'flarum/components/Dropdown';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import Post from 'flarum/components/Post';
import listItems from 'flarum/helpers/listItems';

export default function () {
  extend(CommentPost.prototype, 'headerItems', function(items) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    // get all PostControls
    const controls = PostControls.controls(this.attrs.post, this);

    // check if is set '1' for mergging controls
    if (defaultSettings.discussionControlsToPost) {
      // check if is first post
      if (this.attrs.post.number() === 1) {
        // get type and id of discussion from post info
        const discussionData = this.attrs.post.data.relationships.discussion.data;
        // get current discussion from Flarum API
        const discussion = app.store.getById(discussionData.type, discussionData.id);
        // get moderation controls for current discussion
        const discussionModerationControls = DiscussionControls.moderationControls(discussion);
        
        // remove unneeded controls for discussion
      discussionModerationControls.has('lock') ? discussionModerationControls.remove('lock') : '';
      discussionModerationControls.has('sticky') ? discussionModerationControls.remove('sticky') : '';

      // change icon for 'rename' control
      discussionModerationControls.has('rename') ? discussionModerationControls.get('rename').attrs.icon = 'fas fa-heading' : '';

      // merge all controls in one list
      controls.merge(discussionModerationControls);
      }
    }

    // check if is set '1' for duplication
    if (defaultSettings.postControlsUp) {
      // add item 'controls' on post header
      // like in original Flarum code
      items.add(
        'controls',
        <aside className="Post-actions-top">
          <ul>
            {controls.toArray().length ? (
              <li>
                <Dropdown
                  className="Post-controls-h"
                  buttonClassName="Button Button--icon Button--flat"
                  menuClassName="Dropdown-menu--right"
                  icon="fas fa-ellipsis-h"
                  onshow={() => this.$(".Post-actions-top").addClass("open")}
                  onhide={() => this.$(".Post-actions-top").removeClass("open")}
                >
                  {controls.toArray()}
                </Dropdown>
              </li>
            ) : (
              ""
            )}
          </ul>
        </aside>
      );
    }
  });

  override(Post.prototype, 'view', function(original) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    // code from Flarum
    const attrs = this.elementAttrs();
    attrs.className = this.classes(attrs.className).join(' ');
    // get all PostControls
    const controls = PostControls.controls(this.attrs.post, this);

    // check if is set '1' for mergging controls
    if (defaultSettings.discussionControlsToPost) {
      // check if is first post
      if (this.attrs.post.number() === 1) {
        // get type and id of discussion from post info
        const discussionData = this.attrs.post.data.relationships.discussion.data;
        // get current discussion from Flarum API
        const discussion = app.store.getById(discussionData.type, discussionData.id);
        // get moderation controls option for current discussion
        const discussionModerationControls = DiscussionControls.moderationControls(discussion);
        
        // remove unneeded controls for discussion
      discussionModerationControls.has('lock') ? discussionModerationControls.remove('lock') : '';
      discussionModerationControls.has('sticky') ? discussionModerationControls.remove('sticky') : '';

      // change icon for 'rename' control
      discussionModerationControls.has('rename') ? discussionModerationControls.get('rename').attrs.icon = 'fas fa-heading' : '';

      // merge all controls in one list
      controls.merge(discussionModerationControls);
      }

      // return result
      // like in original Flarum code
      return (
        <article {...attrs}>
          <div>
            {this.content()}
            <aside className="Post-actions">
              <ul>
                {listItems(this.actionItems().toArray())}
                {controls.toArray().length ? (
                  <li>
                    <Dropdown
                      className="Post-controls"
                      buttonClassName="Button Button--icon Button--flat"
                      menuClassName="Dropdown-menu--right"
                      icon="fas fa-ellipsis-h"
                      onshow={() => this.$('.Post-actions').addClass('open')}
                      onhide={() => this.$('.Post-actions').removeClass('open')}
                    >
                      {controls.toArray()}
                    </Dropdown>
                  </li>
                ) : (
                  ''
                )}
              </ul>
            </aside>
            <footer className="Post-footer">
              <ul>{listItems(this.footerItems().toArray())}</ul>
            </footer>
          </div>
        </article>
      );
    } else {
      // if is set '0' for mergging controls
      // return original Flarum code
      return original();
    }
  });
};
