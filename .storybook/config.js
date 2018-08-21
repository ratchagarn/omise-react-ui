/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Storybook - config
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

function loadStories() {
  require('./stories')
}

configure(loadStories, module)

setOptions({
  showAddonPanel: false,
  name: 'OMISE-UI-STORY',
  url: 'https://git.omise.co/ratchagarn/react-ui-story',
  sidebarAnimations: true
})
