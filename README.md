# oaky-ui-kit

![oaky-ui-kit-logo.png](oaky-ui-kit-logo.png)

UI Kit with react, typescript, styled-components and CSS. This is a React Component Library generated with Vite.

This UI Kit contains the following Components: Alert, AlertPopup, Button, ButtonQuantity, CheckBoxSlide, ModalDialog, CenteringContainer, IconButton, ImgCarousel, LayoutCore, LayoutSensitive, LayoutBullet, ILayoutContext, LayoutContext, LayoutContextProvider, TopNavBar, Link, ListBox, MenuIconButton, MenuList, MenuListFloat, Paper, CircularProgress, SelectList, SplitableContainer, SplitLeft, SplitRight, SplitBar, RadioButtonList, SelectOptions, BulletsStepper, LinksStepper, TextsStepper, SingleAttrTable, TextField, Themes, AcordeonMenuList, AcordeonMenuItem, Tooltip, TableGridSelectable, TableGrid


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
└── oaky-ui-kit # lib project containing dist folder or only dist folder
├── oaky-ui-kit-demo #consumer app (or other app)

```
Go oaky-ui-kit/dist folder and use: npm link
Go to the libconsumer (oaky-ui-kit-demo) directory and run: npm link oaky-ui-kit

## Use as npm libconsumer

Install library:
```bash
npm install oaky-ui-kit
```

```bash
import { Button } from "oaky-ui-kit"

Use component from library:
...
<Button type="button" 
onClick={handleClickOpen} >
Text
</Button>
...
```

## Use as folder libconsumer

Download or clone repository and copy lib folder into your project.

```bash
your_project
└── lib # lib project containing lib folder of library
├── pages > index # consumer

```
And use with imports.
```bash
//index.tsx
import {Button, CenteringContainer, ThemeCore} from '../lib'

export default function Home() {
  return (
   <ThemeProvider theme={ThemeCore}>
     
      <CenteringContainer>
        <Button type="button" onClick={()=>{}} style={{ marginTop: "15px" }} styleType={"primary"}>
          primary
        </Button>
      </CenteringContainer>

    </ThemeProvider >
  )
}
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

Release versions in NPM:
- https://medium.com/att-israel/npm-versions-explained-60e4d6b9920f


## Stay in touch

- Author - [Dario Palminio](linkedin.com/in/palminio)

## Logo and tribute

The name is based on the cartoon character named oaky in tribute to Manuel García Ferré.
