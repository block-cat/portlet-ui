import { extend, override } from 'flarum/extend';
import app from 'flarum/app';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import PostStream from 'flarum/components/PostStream';
import highlight from 'flarum/helpers/highlight';
import escapeRegExp from 'flarum/utils/escapeRegExp';

import ArticleModal from '../components/ArticleModal';

export default function () {
  // console.log(app);
  extend(DiscussionListItem.prototype, 'view', function (view) {
    // get needed data
    const discussion = this.attrs.discussion;
    let jumpTo = 0;

    if (this.attrs.params.q) {
      const post = discussion.mostRelevantPost();
      if (post) {
        jumpTo = post.number();
      }

      const phrase = escapeRegExp(this.attrs.params.q);
      this.highlightRegExp = new RegExp(phrase + '|' + phrase.trim().replace(/\s+/g, '|'), 'gi');
    } else {
      jumpTo = Math.min(discussion.lastPostNumber(), (discussion.lastReadPostNumber() || 0) + 1);
    }

    // extract container with tags_autor from Vasile modification
    const tags_autor = view.children[2].children[2].children.pop();
    // extract container with info from Vasile modification
    const info = view.children[2].children[2].children.pop();
    // remove DiscussionListItem-main container
    view.children[2].children.splice(2, 1);

    // create new DiscussionListItem-main container
    const main = m('.DiscussionListItem-main', {
      // onclick should open modal
      onclick: this.openModal.bind(this),
    }, [
      m('h3', {
        className: 'DiscussionListItem-title',
      }, highlight(discussion.title(), this.highlightRegExp)),
      info,
      tags_autor,
    ]);

    // add new DiscussionListItem-main container in structure
    view.children[2].children.splice(2, 0, main);

    // console.log(main);
    // console.log(view.children[2].children[2]);
  });

  DiscussionListItem.prototype.openModal = function () {
    // console.log(this.attrs.discussion);
    // const discussion = this.attrs.discussion;
    app.modal.show(ArticleModal, {
      discussion: this.attrs.discussion,
    });
  };
}