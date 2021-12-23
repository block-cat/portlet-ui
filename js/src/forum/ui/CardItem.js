import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import DiscussionPage from 'flarum/components/DiscussionPage';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import Dropdown from 'flarum/components/Dropdown';
import icon from 'flarum/helpers/icon';
import Link from 'flarum/components/Link';
import extractText from 'flarum/utils/extractText';
import humanTime from 'flarum/utils/humanTime';
import avatar from 'flarum/helpers/avatar';
import listItems from 'flarum/helpers/listItems';
import highlight from 'flarum/helpers/highlight';
import abbreviateNumber from 'flarum/utils/abbreviateNumber';
import LinkButton from 'flarum/components/LinkButton';
import DiscussionHero from 'flarum/components/DiscussionHero';
import DiscussionListPane from 'flarum/components/DiscussionListPane';
import PostStream from 'flarum/components/PostStream';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Tooltip from 'flarum/common/components/Tooltip';
import CommentPost from 'flarum/components/CommentPost';

import { escapeRegExp } from 'lodash-es';
export default function () {



    override(DiscussionPage.prototype, 'view', function () {

        const discussion = this.discussion;


        return (
            <div className="DiscussionPage">
                <DiscussionListPane state={app.discussions} />
                <div className="DiscussionPage-discussion">
                    {discussion ? (
                        [
                            DiscussionHero.component({ discussion }),
                            <div className="container">
                                <nav className="DiscussionPage-nav">
                                    <ul>{listItems(this.sidebarItems().toArray())}</ul>
                                </nav>
                                <div className="DiscussionPage-stream">
                                    {PostStream.component({
                                        discussion,
                                        stream: this.stream,
                                        onPositionChange: this.positionChanged.bind(this),
                                    })}
                                </div>
                            </div>,
                        ]
                    ) : (
                        <LoadingIndicator />
                    )}
                </div>
            </div>
        );
    }
    );


    override(DiscussionListItem.prototype, 'view', function () {



        const discussion = this.attrs.discussion;
        const user = discussion.user();
        const isUnread = discussion.isUnread();
        const isRead = discussion.isRead();
        const showUnread = !this.showRepliesCount() && isUnread;
        let jumpTo = 0;
        const controls = DiscussionControls.controls(discussion, this).toArray();
        const attrs = this.elementAttrs();

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

        let tags = listItems(this.infoItems().toArray())[0];

        let terminalPost;
        for (let x = 0; x < listItems(this.infoItems().toArray()).length; x++) {
            if (listItems(this.infoItems().toArray())[x].key) {
                if (listItems(this.infoItems().toArray())[x].key == "terminalPost") {
                    terminalPost = listItems(this.infoItems().toArray())[x];
                }
            }
        }


        function likes() {
            if (discussion.data.attributes.votes) {
                return discussion.votes()
            } else {
                return "0"
            }
        }
        let displayName;
        if (user != false) {
            displayName = user.data.attributes.displayName;
            /* discussionCount = user.data.attributes.discussionCount;
            commentCount = user.data.attributes.commentCount; */
            /* console.log(user.data.attributes); */
        } else {
            displayName = "anonim";
        }
        const vasiaSettings = JSON.parse(app.forum.attribute('block-cat.vasiaSettings'));
        vasiaSettings.add_borders ? attrs.className += " D-border" : "";

        return (
            <div {...attrs}>
                {controls.length
                    ? Dropdown.component(
                        {
                            icon: 'fas fa-ellipsis-v',
                            className: 'DiscussionListItem-controls',
                            buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right',
                            accessibleToggleLabel: app.translator.trans('core.forum.discussion_controls.toggle_dropdown_accessible_label'),
                        },
                        controls
                    )
                    : ''}

                <span
                    className={'Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic' + (isUnread ? '' : ' disabled')}
                    onclick={this.markAsRead.bind(this)}
                >
                    {icon('fas fa-check')}
                </span>

                <div className={'DiscussionListItem-content Slidable-content' + (isUnread ? ' unread' : '') + (isRead ? ' read' : '') + (vasiaSettings.remove_additional_space ? ' D_remove_additional_space' : '')}>

                    {/* <ul className="DiscussionListItem-badges badges">{listItems(discussion.badges().toArray())}</ul> */}

                    <Link href={app.route.discussion(discussion, jumpTo)} className="DiscussionListItem-main">
                        <h3 className="DiscussionListItem-title" style={"font-size: " + vasiaSettings.title_font_size + "px !important;"}>{highlight(discussion.title(), this.highlightRegExp)}</h3>
                        {vasiaSettings.view_tags && !vasiaSettings.tags_bottom ? <ul className="DiscussionListItem-info-tags">{tags}</ul> : ""}

                        <ul className="DiscussionListItem-info" style={"font-size: " + vasiaSettings.item_excerpt_font_size + "px !important; color: " + vasiaSettings.item_excerpt_color + " !important;"}>
                            {listItems(this.infoItems().toArray())[listItems(this.infoItems().toArray()).length - 1]}
                        </ul>

                        <div className="DiscussionListItem_tags_and_author">
                            {/* <div className="div_button_citeste_mai_mult">
                                <button className="button_citeste_mai_mult">{app.translator.trans('block-cat-default.forum.button_citeste_mai_mult')}</button>
                            </div> */}
                            <div>
                                {vasiaSettings.view_tags && vasiaSettings.tags_bottom ? <span style="display: flex;">Etichete: <ul className="DiscussionListItem-info-tags">{tags}</ul></span> : ""}
                            </div>
                            <div class="DiscussionListItem_tags_and_author_div2">
                                <div>
                                    {vasiaSettings.buttons_votes_comments_views ?
                                        <div className="div_likes_comments">
                                            <div title="Voturi">
                                                <h4 className="">{highlight(likes(), this.highlightRegExp)}<span style="margin-left: 5px;">{app.translator.trans('block-cat-default.forum.likes')}</span></h4>
                                            </div>
                                            <div title="Comentarii" style="margin-left: 10px;">
                                                <h4 className="">{highlight(discussion.commentCount() - 1, this.highlightRegExp)}<span style="margin-left: 5px;">{app.translator.trans('block-cat-default.forum.comments')}</span></h4>
                                            </div>
                                            {discussion.viewCount ?
                                                <div title="Vizualizări" style="margin-left: 10px;">
                                                    <h4 className="">{highlight(discussion.viewCount(), this.highlightRegExp)}<span style="margin-left: 5px;">{app.translator.trans('block-cat-default.forum.views')}</span></h4>
                                                </div>
                                                : ""}
                                        </div>
                                        : ""}
                                    {vasiaSettings.author_bottom ?
                                        <div className="DiscussionListItem-options-author">
                                            <Link className="author-link" href={user ? app.route.user(user) : '#'} style="flex-direction: column;">
                                                {/* mod by Tudor on 28.11.2021 */}
                                                <p style="color: hsl(210,8%,45%);">{app.translator.trans('core.forum.discussion_list.started_text', { displayName, ago: humanTime(discussion.createdAt()) })}</p>
                                                <div style="display: flex;">
                                                    {avatar(user, { title: '' })}
                                                    <div>
                                                        <p style="font-size: 12px;">{displayName.replace('[șters]', 'anonim')}</p>
                                                        <p>{user.data ? <span><i class="icon fas fa-trophy Button-icon" style="font-size: 10px; margin-right: 2px;"></i>{user.data.attributes.points}</span> : ""} {user.data ? <span><i class="icon fas fa-comment Button-icon" style="font-size: 10px; margin-right: 2px;"></i>{user.data.attributes.discussionCount}</span> : ""}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        : ""}
                                </div>
                                <hr />
                                <div></div>
                            </div>
                        </div>
                    </Link>
                    {/* <CommentPost post={discussion.firstPost()} /> */}
                    <span
                        tabindex="0"
                        role="button"
                        className="DiscussionListItem-count"
                        onclick={this.markAsRead.bind(this)}
                        title={showUnread ? app.translator.trans('core.forum.discussion_list.mark_as_read_tooltip') : ''}
                    >
                        {abbreviateNumber(discussion[showUnread ? 'unreadCount' : 'replyCount']())}
                    </span>
                </div>
            </div>
        );
    });
}