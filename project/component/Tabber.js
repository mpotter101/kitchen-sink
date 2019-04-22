/*

    Allows data to be hidden behind tabs via a tabular menu

*/

import Html from './HTML';
import Button from './Button';
import Group from './Group';

export default class Tabber extends Html {
    constructor (config) {
        // Run HTML object constructor
        super (config);

        // Make sure config has certain properties
        config = this.setConfigDefaults ({
            tabs: [
                'first',
                'second',
            ],
            class: 'tabber',
            template: `
                <div>
                    <div class="ui tabular menu">
                    </div>
                </div>
            `,
            activeTab: 0,
            onTabChange: (data) => { console.log ('Tab was changed:', data) }
        })

        // Render
        this.assignConfig (config);
        this.renderToParent ();

        // Collect info needed to function
        this.buttonNode = this.node.find ('.ui.tabular.menu');

        // Create child Objects
        this._tabs = config.tabs;
        this.tabs = [];
        this._tabs.forEach ((item, index) => {
            let tabButton = new Button ({
                parent: this.buttonNode,
                label: item,
                attr: { 'data-tab': item },
                class: 'item',
                onClick: (event) => { this.tabChangeHandler (event) },
            });

            let tabContent = new Group ({
                parent: this.node,
                attr: { 'data-tab': item },
                class: 'ui tab',
                label: { content: item }
            });

            tabButton.node.tab ();
            tabContent.node.tab ();

            this.tabs.push ({
                name: item,
                button: tabButton,
                content: tabContent,
                index: index
            });
        })

        this.setActiveTab (this.activeTab);
    }

    addContent (tab, content) {
        let tabIndex = tab;

        if (typeof tabIndex == 'string') {
            tabIndex = this.getTabByName (tabIndex).index;
        }

        let tabObject = this.tabs [tabIndex];

        tabObject.content.node.append (content);
    }

    changeTab (tab) {
        let tabIndex = tab;

        if (typeof tabIndex == 'string') {
            tabIndex = this.getTabByName (tabIndex).index;
        }

        o.setActiveTab (tabIndex)
    }

    getTabByName (name) {
        let item, key;

        for (key in this.tabs) {
            item = this.tabs [key];

            if (item.name == name) {
                return item;
            }
        }
    }

    setActiveTab (index) {
        // Deactivate all tab
        this.tabs.forEach ((item, index) => {
            item.button.node.removeClass ('active');
            item.content.node.removeClass ('active');
        })

        // Activate the given index
        this.tabs [index].button.node.addClass ('active');
        this.tabs [index].content.node.addClass ('active');

        this.activeTab = index;
    }

    tabChangeHandler (data) {
        this.onTabChange ({
            event: data.event,
            target: this,
            node: this.node,
            tab: this.getTabByName (data.target.label)
        })
    }
}
