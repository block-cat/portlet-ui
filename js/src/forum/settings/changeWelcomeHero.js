import { extend, override } from "flarum/extend";
import WelcomeHero from "flarum/components/WelcomeHero";
import Button from "flarum/components/Button";
import Guguta from "../components/Guguta";

export default function () {
    WelcomeHero.prototype.randomFeatures = function() {
        let n = Math.floor(Math.random() * this.features.length);
        this.feature = this.features[n];
        m.redraw();
    }

    extend(WelcomeHero.prototype, 'oninit', function() {
        this.hidden = JSON.parse(this.hidden);

        this.hiddenTime = Number(localStorage.getItem('welcomeHiddenTime'));

        if (Date.now() > this.hiddenTime) {
            this.hidden = false;
        }
        
        if (!this.hidden) {
            this.welcomeSettings = JSON.parse(app.forum.attribute('block-cat.welcomeSettings'));
            this.features = this.welcomeSettings.sliderItems;
            this.feature = this.features[0];
            this.interval = setInterval(this.randomFeatures.bind(this), 7000);
        }
        
    });

    override(WelcomeHero.prototype, 'view', function(original) {
        if (this.hidden || app.session.user) return original();

        const slideUp = () => {
            this.$().slideUp(this.hide.bind(this));
        };

        return (
            <header className="Welcome sm:fixed w-11/12 rounded-lg text-center ml-4 sm:ml-8 md:ml-14 p-12 mt-4 z-10">
                <div class="container">
                    {Button.component({
                        icon: 'fas fa-times rounded-full px-4 py-3 hover:bg-blue-100',
                        onclick: slideUp,
                        className: 'Hero-close Button Button--icon Button--link',
                    })}
                
                    <div className="containerNarrow">
                        <h2 className="Hero-title" class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">{app.forum.attribute("welcomeTitle")}</h2>
                        <div className="Hero-subtitle" class="text-lg text-white mt-2 mb-4">{m.trust(app.forum.attribute("welcomeMessage"))}</div>
                    </div>
                </div>
                <div class="md:flex mt-4 max-w-5xl mx-auto">
                    <div class="sm:w-1/2 bg-blue-100 rounded-lg md:mr-8">
                    <i class="icon fa fa-edit text-3xl text-blue-500 pt-8"></i>
                        {m("h2", {className:"text-lg p-8 mx-auto"}, this.welcomeSettings.leftText)}
                        <div id="writeFromWelcomeHero" class="mb-8 pb-4">
                            {
                                Button.component({
                                    onclick: () => {
                                        slideUp();
                                        $('button.Button.Button--primary.IndexPage-newDiscussion.hasIcon').click();
                                    },
                                    className: "bg-blue-500 hover:bg-blue-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",
                                    'aria-label': "Scrie un articol nou",
                                    },
                                    app.translator.trans("Scrie un articol nou"))
                            }
                        </div>
                    </div>
                    <div class="sm:w-1/2 bg-red-100 rounded-lg">
                        <i class="icon fas fa-search text-3xl text-red-500 pt-8"></i>
                        {m("h2", {className:"text-lg p-8 mx-auto"}, this.welcomeSettings.rightText)}
                        <div id="browseFromWelcomeHero" class="mb-8 pb-4">
                            {
                                Button.component({
                                    onclick: () => {
                                        slideUp();
                                    },
                                    className: "bg-red-500 hover:bg-red-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded",
                                    'aria-label': "Navighează prin acest portlet",
                                    },
                                    app.translator.trans("Navighează prin acest portlet"))
                            }
                        </div>
                    </div>
                </div>
                
                <div class="features md:flex mt-4 max-w-5xl mx-auto">
                    {
                        Guguta.component({
                            type: 'welcome',
                            info: 'Salut! Eu sunt Guguță, un robot care te ajută să scrii articole.',
                            className: 'absolute w-48 md:ml-4 md:-mt-14',
                        })
                    }
                    <h1 id="features" class="text-3xl text-blue-300 mx-auto">{this.feature}</h1>
                </div>
            </header>
        );
    });

    override(WelcomeHero.prototype, 'hide', function(original) {
        clearTimeout(this.interval);

        localStorage.setItem('welcomeHidden', 'true');
        localStorage.setItem('welcomeHiddenTime', Date.now() + 20*60*60*1000); // 20 hours

        this.hidden = true;
    });
};
