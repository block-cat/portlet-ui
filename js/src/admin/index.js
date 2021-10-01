import DefaultSettingsPage from './components/DefaultSettingsPage';

app.initializers.add('block-cat/portlet-ui', () => {
  app.extensionData.for('block-cat-portlet-ui')
    .registerPage(DefaultSettingsPage);
});