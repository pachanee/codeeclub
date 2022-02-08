import { keys } from '@codee-club/common/dist/utils/object-extensions'

const themes: { [theme: string]: { icon: string } } = {
  default: {
    icon: 'code-braces'
  },
  java: {
    icon: 'language-java'
  },
  kotlin: {
    icon: 'language-kotlin'
  },
  swift: {
    icon: 'language-swift'
  },
  python: {
    icon: 'language-python'
  },
  green: {
    icon: 'tree-outline'
  }
}

export const cssClass = function (theme?: string): string {
  return theme && keys(themes).includes(theme) ? `is-theme-${theme}` : 'is-theme-default'
}

export const iconName = function (theme?: string): string {
  if (theme && keys(themes).includes(theme)) {
    return themes[theme].icon
  }
  return themes.default.icon
}
