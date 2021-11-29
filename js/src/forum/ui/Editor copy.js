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
import KioskBoard from "kioskboard";

// Initialize KioskBoard (default/all options)

KioskBoard.Init({

    /*!
    * Required
    * Have to define an Array of Objects for the custom keys. Hint: Each object creates a row element (HTML) on the keyboard.
    * e.g. [{"key":"value"}, {"key":"value"}] => [{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}]
    */
    keysArrayOfObjects: [
        {
          "0": "Q",
          "1": "W",
          "2": "E",
          "3": "R",
          "4": "T",
          "5": "Y",
          "6": "U",
          "7": "I",
          "8": "O",
          "9": "P",
          "10": "Ă",
          "11": "Î",
          "12": "Â"
        },
        {
          "0": "A",
          "1": "S",
          "2": "D",
          "3": "F",
          "4": "G",
          "5": "H",
          "6": "J",
          "7": "K",
          "8": "L",
          "9": "Ș",
          "10": "Ț"
        },
        {
          "0": "Z",
          "1": "X",
          "2": "C",
          "3": "V",
          "4": "B",
          "5": "N",
          "6": "M"
        }
      ],
  
    /*!
    * Required only if "keysArrayOfObjects" is "null".
    * The path of the "kioskboard-keys-${langugage}.json" file must be set to the "keysJsonUrl" option. (XMLHttpRequest to getting the keys from JSON file.)
    * e.g. '/Content/Plugins/KioskBoard/dist/kioskboard-keys-english.json'
    */
    keysJsonUrl: null,
  
    /*
    * Optional: (Special Characters Object)* Can override default special characters object with the new/custom one.
    * e.g. {"key":"value", "key":"value", ...} => {"0":"#", "1":"$", "2":"%", "3":"+", "4":"-", "5":"*"}
    */
    specialCharactersObject: null,
  
    // Optional: (Other Options)
  
    // Language Code (ISO 639-1) for custom keys (for language support) => e.g. "de" || "en" || "fr" || "hu" || "tr" etc...
    language: 'en',
  
    // The theme of keyboard => "light" || "dark" || "flat" || "material" || "oldschool"
    theme: 'dark',
  
    // Uppercase or lowercase to start. Uppercase when "true"
    capsLockActive: false,
  
    /*
    * Allow or prevent real/physical keyboard usage. Prevented when "false"
    * In addition, the "allowMobileKeyboard" option must be "true" as well, if the real/physical keyboard has wanted to be used.
    */
    allowRealKeyboard: false,
  
    // Allow or prevent mobile keyboard usage. Prevented when "false"
    allowMobileKeyboard: false,
  
    // CSS animations for opening or closing the keyboard
    cssAnimations: true,
  
    // CSS animations duration as millisecond
    cssAnimationsDuration: 360,
  
    // CSS animations style for opening or closing the keyboard => "slide" || "fade"
    cssAnimationsStyle: 'slide',
  
    // Allow or deny Spacebar on the keyboard. The keyboard is denied when "false"
    keysAllowSpacebar: true,
  
    // Text of the space key (spacebar). Without text => " "
    keysSpacebarText: 'Space',
  
    // Font family of the keys
    keysFontFamily: 'sans-serif',
  
    // Font size of the keys
    keysFontSize: '22px',
  
    // Font weight of the keys
    keysFontWeight: 'normal',
  
    // Size of the icon keys
    keysIconSize: '25px',
  
    // Scrolls the document to the top of the input/textarea element. The default value is "true" as before. Prevented when "false"
    autoScroll: true,
  });


export default function () {


    /* extend(Composer.prototype, 'view', function (view) {
        console.log(view.attrs.className += " fullScreen");
    }) */



    override(ComposerBody.prototype, 'view', function () {
        {/* <ConfirmDocumentUnload when={this.hasChanges.bind(this)}> */ }
        let title = this.headerItems().toArray();
        title.splice(0, 2);
        let etichete = this.headerItems().toArray();
        let MyDisplayName = this.attrs.user.data.attributes.displayName;    
        KioskBoard.Run('.js-virtual-keyboard');
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
                        <textarea class="js-virtual-keyboard" data-kioskboard-type="all" placeholder="Your Address"></textarea>
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
