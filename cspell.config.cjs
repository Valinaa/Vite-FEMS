/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
module.exports = {
    words: [],
    flagWords: ['hte'],
    ignoreWords: null,
    ignorePaths: [
        '/node_modules/**',
        '/.vscode/**',
        '/static/**',
        '*.yaml',
        '*.json',
        'tailwind.config.cjs',
        'vite.config.ts',
        'components.d.ts',
        'auto-imports.d.ts',
    ],
    useGitignore: true,
    languageSettings: [
        {
            languageId: 'typescript,javascript,markdown,vue',
            locale: '*',
        },
    ],
    dictionaries: [
        'typescript',
        'node',
        'css',
        'html',
        'fonts',
        'npm',
        'filetypes',
    ],
}
