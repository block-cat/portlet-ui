import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';
import DiscussionListPane from 'flarum/components/DiscussionListPane';
import LinkButton from 'flarum/components/LinkButton';
import Button from 'flarum/components/Button';
import listItems from 'flarum/common/helpers/listItems';
import classList from 'flarum/common/utils/classList';
import PostStream from 'flarum/components/PostStream';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import DiscussionHero from 'flarum/components/DiscussionHero';
import IndexPage from 'flarum/components/IndexPage';

export default function () {

    override(DiscussionPage.prototype, 'view', function () {



        let index = IndexPage.prototype.sidebarItems();

        const discussion = this.discussion;


        if (discussion) {
            const badges = discussion.badges().toArray();
            console.log(badges);
            if (badges.length) {
                items.add('badges', <ul className="DiscussionHero-badges badges">{listItems(badges)}</ul>, 10);
            }
        }
        /* let badges_tags;
        if (discussion) {
            const badges = discussion.badges().toArray();
            console.log(discussion.badges().toArray());
            if (badges.length) {
                badges_tags = "<ul className='DiscussionHero-badges badges'>{listItems(badges)}</ul>";
            }
        } */


        return (
            <div className="DiscussionPage">
                <DiscussionListPane state={app.discussions} />
                <div className="DiscussionPage-discussion">
                    {discussion ? (
                        [
                            /* DiscussionHero.component({ discussion }), */
                            <div className="container">
                                <div className="sideNavContainer">
                                    <div className="sideNav">
                                        <ul className="">{listItems(index.toArray())}</ul>
                                    </div>
                                    <div style="width: 100%; padding-top: 30px;">
                                        <nav className="DiscussionPage-nav">
                                            <ul>{listItems(this.sidebarItems().toArray())}</ul>
                                        </nav>
                                        <div className="DiscussionPage-stream">
                                            <div className="Hero_2">
                                                {/* {badges_tags} */}
                                                <h2 className="DiscussionHero-title">{discussion.title()}</h2>
                                            </div>
                                            {PostStream.component({
                                                discussion,
                                                stream: this.stream,
                                                onPositionChange: this.positionChanged.bind(this),
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>,
                        ]
                    ) : (
                        <LoadingIndicator />
                    )}
                </div>
            </div>
        );
    });
    extend(DiscussionPage.prototype, 'view', function (items) {

        const vasiaSettings = JSON.parse(app.forum.attribute('block-cat.vasiaSettings'));
        if (vasiaSettings.display_pdf_files) {
            let span_pdf = document.getElementsByClassName("span_pdf");
            if (span_pdf != undefined) {
                for (let i = 0; i < span_pdf.length; i++) {
                    span_pdf[i].classList.add("d-none");
                }
            }
            let iframe_pdf = document.getElementsByClassName("iframe_pdf");
            if (iframe_pdf.length > 0) {
                for (let i = 0; i < iframe_pdf.length; i++) {
                    for (let j = 0; j < iframe_pdf[i].attributes.length; j++) {
                        let text = iframe_pdf[i].innerHTML;

                        var from = text.search('<a href="');
                        from += 9;
                        var to = text.length;
                        var new_text = text.substring(from, to);

                        var from2 = 0;
                        var to2 = new_text.search('.pdf');
                        to2 += 4;
                        var new_text2 = new_text.substring(from2, to2);

                        if (iframe_pdf[i].attributes[j].name == "src") {
                            if (iframe_pdf[i].attributes[j].value == "")
                                iframe_pdf[i].attributes[j].value = new_text2;
                        }
                    }
                }
            }
        } else {
            let iframe_pdf = document.getElementsByClassName("iframe_pdf");
            if (iframe_pdf != undefined) {
                for (let i = 0; i < iframe_pdf.length; i++) {
                    iframe_pdf[i].classList.add("d-none");
                }
            }
        }
    });
}
