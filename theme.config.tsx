import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (<span>DayZ Of Ruin</span>),
  project: {
    link: 'https://github.com/Mirasaki-Development/dayz-of-ruin-wiki',
  },
  chat: {
    link: 'https://discord.gg/dayzofruin',
  },
  docsRepositoryBase: 'https://github.com/Mirasaki-Development/dayz-of-ruin-wiki',
  footer: {
    text: 'DayZ of Ruin | Docs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s | Wiki - DayZ of Ruin`
    }
  }
}

export default config
