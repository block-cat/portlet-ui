import Modal from "flarum/components/Modal";
import ItemList from 'flarum/utils/ItemList';
import PostLoading from 'flarum/components/LoadingPost';
import SplitDropdown from 'flarum/common/components/SplitDropdown';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import listItems from 'flarum/common/helpers/listItems';
import PostControls from 'flarum/utils/PostControls';
import Link from 'flarum/common/components/Link';
import username from 'flarum/common/helpers/username';
import userOnline from 'flarum/common/helpers/userOnline';
import PostUser from 'flarum/components/PostUser';
import PostMeta from 'flarum/components/PostMeta';
import PostEdited from 'flarum/components/PostEdited';

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
    // console.log(this.discussion);
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
          
          const items = new ItemList();
          
          items.add(
            'user',
            PostUser.component({
              post,
              oncardshow: () => {},
              oncardhide: () => {},
            }),
            100
          );

          items.add(
            'meta',
            PostMeta.component({ post }),
          );

          if (post.isEdited() && !post.isHidden()) {
            items.add('edited', PostEdited.component({ post }));
          }

          this.headerItemsFirstComment = items.toArray();
          // console.log(this.headerItemsFirstComment);
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

    // console.log(this.firstPostControls);
    // console.log(this.headerItemsFirstComment);

    return [
      <nav className="DiscussionPage-nav">
        <header className="Post-header">
          <ul>{listItems(this.headerItemsFirstComment)}</ul>
        </header>
        <ul>{listItems(this.articleItems().toArray())}</ul>
      </nav>,
      <div className="DiscussionPage-stream">
        <div className="Modal-header ArticleTitle">
          <h3 className="App-titleControl App-titleControl--text">{this.discussion.title()}</h3>
        </div>
        <div className="PostStream">{items}</div>
      </div>
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

    items.add(
      'articleControls',
      SplitDropdown.component(
        {
          icon: 'fas fa-ellipsis-v',
          className: 'App-primaryControl',
          buttonClassName: 'Button--primary',
          accessibleToggleLabel: app.translator.trans('core.forum.discussion_controls.toggle_dropdown_accessible_label'),
        },
        DiscussionControls.controls(this.discussion, this).toArray()
      )
    );

    if (this.firstPostControls.length !== 0) {
      items.add(
        'commentControls',
        SplitDropdown.component(
          {
            icon: 'fas fa-ellipsis-v',
            className: 'App-primaryControl',
            buttonClassName: 'Button--secondary',
            accessibleToggleLabel: app.translator.trans('core.forum.discussion_controls.toggle_dropdown_accessible_label'),
          },
          this.firstPostControls
        )
      );
    }

    return items;
  }
}
