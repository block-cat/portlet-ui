import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import Composer from 'flarum/components/Composer';
import ComposerBody from 'flarum/components/ComposerBody';
import ComposerState from 'flarum/states/ComposerState';
import LinkButton from 'flarum/components/LinkButton';
import Button from 'flarum/components/Button';
import listItems from 'flarum/common/helpers/listItems';
import classList from 'flarum/common/utils/classList';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import ConfirmDocumentUnload from 'flarum/common/components/ConfirmDocumentUnload.js';
import TextEditor from 'flarum/common/components/TextEditor';
import avatar from 'flarum/common/helpers/avatar';

export default function () {


    /* extend(Composer.prototype, 'view', function (view) {
        console.log(view.attrs.className += " fullScreen");
    }) */



    override(ComposerBody.prototype, 'view', function () {
        {/* <ConfirmDocumentUnload when={this.hasChanges.bind(this)}> */ }
        let title = this.headerItems().toArray();
        title.splice(0, 2);
        let etichete = this.headerItems().toArray();
        let MyDisplayName;
        if (this.attrs.user) {
            MyDisplayName = this.attrs.user.data.attributes.displayName;
        }else {
            MyDisplayName = "Anonim"
        }
        return (
            <div className={'ComposerBody ' + (this.attrs.className || '')} >
                <div className="ComposerBody-content">
                    <div className="ComposerBody-content-left">
                        <ul className="ComposerBody-header">{listItems(title)}</ul>
                        <div className="ComposerBody-editor">
                            {TextEditor.component({
                                submitLabel: this.attrs.submitLabel,
                                placeholder: this.attrs.placeholder,
                                disabled: this.loading || this.attrs.disabled,
                                composer: this.composer,
                                preview: this.jumpToPreview && this.jumpToPreview.bind(this),
                                onchange: this.composer.fields.content,
                                onsubmit: this.onsubmit.bind(this),
                                value: this.composer.fields.content(),
                            })}
                        </div>
                    </div>
                    <div className="ComposerBody-content-right">
                        <div className="author">{avatar(this.attrs.user, { className: 'ComposerBody-avatar-right' })} <p className="my_displa_name">{MyDisplayName}</p></div>
                        <ul className="ComposerBody-etichete">{listItems(etichete[1])}</ul>
                        <div className="Button Button_publicare" onclick={this.onsubmit.bind(this)}>{this.attrs.submitLabel}</div>
                    </div>
                </div>
                <LoadingIndicator display="unset" containerClassName={classList('ComposerBody-loading', this.loading && 'active')} size="large" />
            </div >
        );
        /* </ConfirmDocumentUnload> */

    });

    override(Composer.prototype, 'view', function () {
        const body = this.state.body;
        const classes = {
            normal: this.state.position === ComposerState.Position.NORMAL,
            minimized: this.state.position === ComposerState.Position.MINIMIZED,
            /* fullScreen: this.state.position === ComposerState.Position.FULLSCREEN, */
            fullScreen: true,
            active: this.active,
            visible: this.state.isVisible(),
        };

        // Set up a handler so that clicks on the content will show the composer.
        const showIfMinimized = this.state.position === ComposerState.Position.MINIMIZED ? this.state.show.bind(this.state) : undefined;

        this.state.height = window.innerHeight + "px";

        //this.state.position;

        let controlItems2 = this.controlItems().toArray();
        controlItems2.splice(1, 1);
        return (
            <div className={'Composer ' + classList(classes)}>
                <div className="Composer-handle" oncreate={this.configHandle.bind(this)} />
                <ul className="Composer-controls">{listItems(controlItems2)}</ul>
                <div className="Composer-content" onclick={showIfMinimized}>
                    {body.componentClass ? body.componentClass.component({ ...body.attrs, composer: this.state, disabled: classes.minimized }) : ''}
                </div>
            </div>
        );
    });
}
