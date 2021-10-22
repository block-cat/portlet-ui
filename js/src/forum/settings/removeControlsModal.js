import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

export default function () {
  extend(CommentPost.prototype, 'oncreate', function() {
    if ($('.ArticleModal').length !== 0 && this.attrs.post.number() == 1) {
      this.element.children[0].children[1].children[0].children[2].remove();
      // console.log(this.element.children[0].children[1].children[0].children);
    }
  });
};
