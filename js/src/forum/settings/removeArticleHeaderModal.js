import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import PostUser from 'flarum/components/PostUser';
import Link from 'flarum/common/components/Link';
import username from 'flarum/common/helpers/username';
import userOnline from 'flarum/common/helpers/userOnline';

export default function () {
  extend(CommentPost.prototype, 'content', function (view) {
    if ($('.ArticleModal').length !== 0 && this.attrs.post.number() == 1) {
      view.shift();
    }

    if ($('.ArticleModal').length !== 0 && this.attrs.post.number() !== 1) {
      try {
        view[0].children[0].children[0].children[0].children[0].children.shift();
      } catch {}
    }
  });

  override(PostUser.prototype, 'view', function (original) {
    const post = this.attrs.post;
    const user = post.user();

    if ($('.ArticleModal').length !== 0) {
      return (
        <div className="PostUser">
          <h3>
            <Link href={app.route.user(user)}>
              {userOnline(user)}
              {username(user)}
            </Link>
          </h3>
      </div>
      );
    }

    return original();
  });
}