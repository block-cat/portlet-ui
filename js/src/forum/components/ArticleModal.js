import Modal from "flarum/components/Modal";
import ItemList from 'flarum/utils/ItemList';
import PostLoading from 'flarum/components/LoadingPost';
import SplitDropdown from 'flarum/common/components/SplitDropdown';
import Button from 'flarum/common/components/Button';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import listItems from 'flarum/common/helpers/listItems';
import PostControls from 'flarum/utils/PostControls';
import PostUser from 'flarum/components/PostUser';
import PostMeta from 'flarum/components/PostMeta';
import PostEdited from 'flarum/components/PostEdited';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Separator from 'flarum/common/components/Separator';

export default class ArticleModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.discussion = this.attrs.discussion;

    this.includedPosts = [];

    this.firstPostControls = [];

    this.headerItemsFirstComment = '';

    const params = this.requestParams();
    app.store.find('discussions', this.discussion.id(), params)
      .then((discussion) => {
        // console.log(discussion);
        if (discussion.payload && discussion.payload.included) {
          let includedPosts = [];
          const discussionId = discussion.id();
    
          includedPosts = discussion.payload.included
            .filter(
              (record) =>
                record.type === 'posts' &&
                record.relationships &&
                record.relationships.discussion &&
                record.relationships.discussion.data.id === discussionId
            )
            .map((record) => app.store.getById('posts', record.id))
            .sort((a, b) => a.createdAt() - b.createdAt())
            .slice(0, 20);

          // return includedPosts;
          this.setPosts(includedPosts);
        }
      });

    // app.history.push('discussion');
    // console.log(app);
    // console.log(this);
  }

  className() {
    return "ArticleModal";
  }

  title() {
    return "";
    // return this.discussion.title();
  }

  content() {
    let lastTime;
    // console.log(app.composer);
    // console.log(this.includedPosts);
    const postIds = this.discussion.postIds();

    const items = this.includedPosts.map((post, i) => {
      let content;
      const attrs = { 'data-index': i };

      // console.log(attrs);
      if (post) {
        const time = post.createdAt();
        const PostComponent = app.postComponents[post.contentType()];
        content = PostComponent ? PostComponent.component({ post }) : '';
        
        if (post.number() == 1) {
          this.firstPostControls = PostControls.controls(post, this).toArray();
          const guestUsername = post.attribute('guest_username');
          const items = new ItemList();
          
          if (!guestUsername) {
            items.add(
              'user',
              PostUser.component({
                post,
                oncardshow: () => {},
                oncardhide: () => {},
              }),
              100
            );
          } else {
            // code like from guest-posting
            items.add('guest-user', m('.PostUser', [
              m('h3', [
                  m('span.username', guestUsername),
              ]),
            ]), 100);
          }

          items.add(
            'meta',
            PostMeta.component({ post }),
          );

          if (post.isEdited() && !post.isHidden()) {
            items.add('edited', PostEdited.component({ post }));
          }

          this.headerItemsFirstComment = items.toArray();
          // console.log(content.dom);
          // m.redraw();
        }

        attrs.key = 'post' + post.id();
        attrs['data-time'] = time.toISOString();
        attrs['data-number'] = post.number();
        attrs['data-id'] = post.id();
        attrs['data-type'] = post.contentType();

        // If the post before this one was more than 4 days ago, we will
        // display a 'time gap' indicating how long it has been in between
        // the posts.
        const dt = time - lastTime;

        if (dt > 1000 * 60 * 60 * 24 * 4) {
          content = [
            <div className="PostStream-timeGap">
              <span>{app.translator.trans('core.forum.post_stream.time_lapsed_text', { period: dayjs().add(dt, 'ms').fromNow(true) })}</span>
            </div>,
            content,
          ];
        }

        lastTime = time;
      } else {
        attrs.key = 'post' + postIds[i];

        content = PostLoading.component();
      }

      return (
        <div className="PostStream-item" {...attrs}>
          {content}
        </div>
      );
    });

    // console.log(items);
    // console.log(this.headerItemsFirstComment);

    return [
      items.length !== 0 ? [
        <nav className="DiscussionPage-nav rightMenu">
          <header className="Post-header">
            <ul>{listItems(this.headerItemsFirstComment)}</ul>
          </header>
          <ul>
            <li className="controlsGroup">Article Controls</li>
            {listItems(this.articleItems().toArray())}
          </ul>
          <ul>
            {this.firstPostControls.length !== 0 ? (
              <li className="controlsGroup">First Comment Controls</li>
            ) : ''}
            {listItems(this.commentItems().toArray())}
          </ul>
        </nav>,
        <div className="DiscussionPage-stream">
          <div className="Modal-header ArticleTitle">
            <h3 className="App-titleControl App-titleControl--text">{this.discussion.title()}</h3>
          </div>
            <div className="PostStream">{items}</div>
        </div>
      ] : (
        <LoadingIndicator size='large' />
      )
    ]
  }

  setPosts(posts) {
    // console.log(posts);
    this.includedPosts = posts;
    m.redraw();
  }

  /**
   * Get the parameters that should be passed in the API request to get the
   * discussion.
   *
   * @return {Object}
   */
   requestParams() {
    return {
      bySlug: true,
      page: { near: this.near },
    };
  }

  /**
   * Build an item list for the contents of the sidebar.
   *
   * @return {ItemList}
   */
   articleItems() {
    const items = new ItemList();

    let controls = DiscussionControls.controls(this.discussion, this);//.toArray();
    controls.items.reply.priority = 110;
    try {
      controls.items.rename.priority = 100;
    } catch {}
    controls = controls.toArray();

    controls.map((control) => {
      if (!control.itemName.includes("Separator")) {
        items.add(
          control.itemName,
          Button.component({
            icon: control.attrs.icon,
            onclick: control.attrs.onclick,
            className: 'Button Button--secondary',
          },control.children),
        );
      }
      
      // if (control.itemName.includes("Separator")) {
      //   items.add(control.itemName, Separator.component());
      // }
    });

    return items;
  }

  /**
   * Build an item list for the contents of the sidebar.
   *
   * @return {ItemList}
   */
   commentItems() {
    const items = new ItemList();

    if (this.firstPostControls.length !== 0) {
      this.firstPostControls.map((control) => {
        if (!control.itemName.includes("Separator")) {
          items.add(
            control.itemName,
            Button.component({
              icon: control.attrs.icon,
              onclick: control.attrs.onclick,
              className: 'Button Button--secondary',
            },control.children),
          );
        }
      });
    }

    return items;
  }
}
