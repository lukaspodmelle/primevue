import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-tablist',
    content: ({ instance }) => [
        'p-tablist-content',
        {
            'p-tablist-viewport': instance.$pcTabs.scrollable
        }
    ],
    tabs: 'p-tablist-tab-list',
    inkbar: 'p-tablist-active-bar',
    previousButton: 'p-tablist-prev-button p-tablist-nav-button',
    nextButton: 'p-tablist-next-button p-tablist-nav-button'
};

export default BaseStyle.extend({
    name: 'tablist',
    classes
});
