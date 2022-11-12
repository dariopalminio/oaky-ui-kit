# daro-ui-kit

UI Kit with react, typescript, styled-components and CSS. This is a React Component Library generated with Vite.

This UI Kit contains the following Components: Alert, AlertPopup, Button, ButtonQuantity, CheckBoxSlide, ModalDialog, CenteringContainer, IconButton, ImgCarousel, Layout, LayoutContextProvider, TopNavBar, Link, ListBox, MenuIconButton, MenuList, MenuListFloat, Paper, CircularProgress, SelectList, RadioButtonList, SelectOptions, BulletsStepper, LinksStepper, TextsStepper, SingleAttrTable, TextField, Themes


## Code Project Installation

If you download the project from github you must use npm:

```bash
$ npm install
```

## Build the lib

If you have the code downloaded on your local machine you should build with npm:

Run build with vite using npm:
```bash
# build
$ npm run build
```

This generate dist folder containing the build result.

## Lib manual and local installation with Link

If you want to use the code from the project locally, you can use npm link.

Install lib in a folder parallel to your project folder.

```bash
.
└── daro-ui-kit # lib project containing dist folder or only dist folder
├── daro-ui-kit-demo #consumer app (or other app)

```
Go daro-ui-kit/dist folder and use: npm link
Go to the libconsumer (daro-ui-kit-demo) directory and run: npm link daro-ui-kit

## Use as libconsumer

Install library:
```bash
npm install daro-ui-kit
```

```bash
import { Button } from "daro-ui-kit"

Use component from library:
...
<Button type="button" 
onClick={handleClickOpen} >
Text
</Button>
...
```

## References


To build the library I was inspired by others:
- https://ant.design/
- https://mui.com/
- https://getuikit.com
- https://github.com/elm-street-technology/elevate-ui
- https://gitee.com/heerzhang/customize-easy-ui-component
- https://github.com/bx-design/react-grid
- https://github.com/bx-design/react-icons
- https://github.com/bx-design/react-ui

React Component Library with Vite and Deploy in NPM:
- https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff
- https://github.com/bigyanpoudel/react-vite-library


## Stay in touch

- Author - [Dario Palminio](linkedin.com/in/palminio)