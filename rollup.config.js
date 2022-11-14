import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy'
import nodePolyfills from 'rollup-plugin-polyfill-node';
import dts from 'rollup-plugin-dts';
import babel from '@rollup/plugin-babel';

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json');

const globals = {
    ...pkg.devDependencies,
};

export default [
    {
        input: 'src/components/index.ts',
        output: [
            {
                file: './build/components/components.js',
                format: 'cjs', // commonJS
                sourcemap: true,
            },
            {
                file: './build/components/components.min.js',
                format: 'cjs', // commonJS
                sourcemap: true,
                plugins: [terser()]
            },
            {
                file: './build/components/components.es.js',
                format: 'esm', // ES Modules
                sourcemap: true,
            },
            {
                file: './build/components/components.es.min.js',
                format: 'esm', // ES Modules
                sourcemap: true,
                plugins: [terser()]
            }
        ],
        plugins: [peerDepsExternal(),
        resolve({
            browser: true,
            preferBuiltins: false
        }),
        commonjs({
            exclude: 'node_modules',
            ignoreGlobal: true,
        }), babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }), typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                exclude: ['**/*.stories.*'],
            },
        }),
        json(),
        nodePolyfills()
        ]
    },
    {
        input: 'src/icons/index.ts',
        output: [
            {
                file: './build/icons/icons.js',
                format: 'cjs', // commonJS
                sourcemap: true,
            },
            {
                file: './build/icons/icons.min.js',
                format: 'cjs', // commonJS
                sourcemap: true,
                plugins: [terser()]
            },
            {
                file: './build/icons/icons.es.js',
                format: 'esm', // ES Modules
                sourcemap: true,
            },
            {
                file: './build/icons/icons.es.min.js',
                format: 'esm', // ES Modules
                sourcemap: true,
                plugins: [terser()]
            }
        ],
        plugins: [peerDepsExternal(),
        resolve({
            browser: true,
            preferBuiltins: false
        }), commonjs({
            exclude: 'node_modules',
            ignoreGlobal: true,
        }), babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }), typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                exclude: ['**/*.stories.*'],
            },
        }),
        json(),
        nodePolyfills()
        ]
    },
    {
        input: 'src/themes/index.ts',
        output: [
            {
                file: './build/themes/themes.js',
                format: 'cjs', // commonJS
                sourcemap: true,
            },
            {
                file: './build/themes/themes.min.js',
                format: 'cjs', // commonJS
                sourcemap: true,
                plugins: [terser()]
            },
            {
                file: './build/themes/themes.es.js',
                format: 'esm', // ES Modules
                sourcemap: true,
            },
            {
                file: './build/themes/themes.es.min.js',
                format: 'esm', // ES Modules
                sourcemap: true,
                plugins: [terser()]
            }
        ],
        plugins: [peerDepsExternal(),
        resolve({
            browser: true,
            preferBuiltins: false
        }), commonjs({
            exclude: 'node_modules',
            ignoreGlobal: true,
        }), babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }), typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                exclude: ['**/*.stories.*'],
            },
        }),
        json(),
        nodePolyfills()
        ]
    },
    {
        input: 'src/index.ts',
        output: [
            {
                file: './build/index.js',
                format: 'cjs', // commonJS
                sourcemap: true,
            },
            {
                file: './build/index.min.js',
                format: 'cjs', // commonJS
                sourcemap: true,
                plugins: [terser()]
            },
            {
                file: './build/index.es.js',
                format: 'esm', // ES Modules
                sourcemap: true,
            },
            {
                file: './build/index.es.min.js',
                format: 'esm', // ES Modules
                sourcemap: true,
                plugins: [terser()]
            }
        ],
        plugins: [peerDepsExternal(),
        resolve(), commonjs({
            exclude: 'node_modules',
            ignoreGlobal: true,
        }), babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }), typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                exclude: ['**/*.stories.*'],
            },
        }),
        json(),
        nodePolyfills(),
        copy({
            targets: [
                { src: './.npmrc', dest: './build' }
            ]
        }),
        generatePackageJson({
            baseContents: (pkg) => ({
                name: pkg.name,
                version: pkg.version,
                typings: "./types/index.d.ts",
                exports: {
                    ".": "./index.js",
                    "./components": "./components/components.js",
                    "./icons": "./icons/icons.js",
                    "./themes": "./themes/themes.js"
                },
                typesVersions: {
                    "*": {
                        ".": ["./types"],
                        "components": [
                            "./types/components"
                        ],
                        "icons": [
                            "./types/icons"
                        ],
                        "themes": [
                            "./types/themes"
                        ]
                    }
                }
            })
        })],
        external: Object.keys(globals),
    },
    {
        input: 'build/types/index.d.ts',
        output: [{ file: 'build/index.d.ts', format: "esm" }],
        plugins: [dts()],
    },
];