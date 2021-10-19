import { extend } from 'flarum/extend';
import Button from 'flarum/common/components/Button';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import ArticleModal from '../components/ArticleModal';

export default function () {
  extend(DiscussionControls, 'userControls', function (items, discussion, context) {
    if (context instanceof ArticleModal) {
      items.add(
        'reply',
        discussion.canReply()
          ? Button.component(
            {
              icon: 'fas fa-reply',
                onclick: () => {
                  // If the user is not logged in, the promise rejects, and a login modal shows up.
                  // Since that's already handled, we dont need to show an error message in the console.
                  return this.replyAction
                    .bind(discussion)(true, false)
                    .catch(() => {});
                },
            },
            app.translator.trans(
              app.session.user ? 'core.forum.discussion_controls.reply_button' : 'core.forum.discussion_controls.log_in_to_reply_button'
            )
          )
          : Button.component(
            {
              icon: 'fas fa-reply',
              className: 'disabled',
              title: app.translator.trans('core.forum.discussion_controls.cannot_reply_text'),
            },
            app.translator.trans('core.forum.discussion_controls.cannot_reply_button')
          ),
          100
      );
    }
  });
}