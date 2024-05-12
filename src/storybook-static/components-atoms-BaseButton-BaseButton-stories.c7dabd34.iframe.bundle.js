"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[226],{"./components/atoms/BaseButton/BaseButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NormalPrimaryButton:()=>NormalPrimaryButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _NormalPrimaryButton_parameters,_NormalPrimaryButton_parameters_docs,_NormalPrimaryButton_parameters1,___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/atoms/BaseButton/index.tsx"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"atoms/BaseButton/BaseButton",component:___WEBPACK_IMPORTED_MODULE_0__.S,tags:["autodocs"],args:{}},NormalPrimaryButton={args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),title:"ボタン",width:"threeQuarters",backgroundColor:"normalPrimary",fontSize:"p24",hoveredBackgroundColor:"subtlePrimary"}};NormalPrimaryButton.parameters={...NormalPrimaryButton.parameters,docs:{...null===(_NormalPrimaryButton_parameters=NormalPrimaryButton.parameters)||void 0===_NormalPrimaryButton_parameters?void 0:_NormalPrimaryButton_parameters.docs,source:{originalSource:"{\n  args: {\n    onClick: fn(),\n    title: 'ボタン',\n    width: 'threeQuarters',\n    backgroundColor: 'normalPrimary',\n    fontSize: 'p24',\n    hoveredBackgroundColor: 'subtlePrimary'\n  }\n}",...null===(_NormalPrimaryButton_parameters1=NormalPrimaryButton.parameters)||void 0===_NormalPrimaryButton_parameters1||null===(_NormalPrimaryButton_parameters_docs=_NormalPrimaryButton_parameters1.docs)||void 0===_NormalPrimaryButton_parameters_docs?void 0:_NormalPrimaryButton_parameters_docs.source}}};const __namedExportsOrder=["NormalPrimaryButton"]},"./components/atoms/BaseButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>BaseButton});var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@swc/helpers/esm/_tagged_template_literal.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./styles/theme.ts"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _templateObject(){const data=(0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)(["\n\tdisplay: block;\n\twidth: ",";\n\tbackground-color: ",";\n\tborder: none;\n\tcursol: pointer;\n\toutline: none;\n\tpadding: ",";\n\tfont-size: ",";\n\tfont-weight: ",";\n\tcolor: ",";\n\tappearance: none;\n\tborder-radius: ",";\n\ttransition: ",";\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n"]);return _templateObject=function(){return data},data}const BaseButton=param=>{let{onClick,title,width,backgroundColor,fontSize,hoveredBackgroundColor}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button,{onClick,$width:width,$backgroundColor:backgroundColor,$fontSize:fontSize,$hoveredBackgroundColor:hoveredBackgroundColor,children:title})},Button=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(_templateObject(),(param=>{let{$width,theme}=param;return $width?theme.size[$width]:theme.size.threeQuarters}),(param=>{let{$backgroundColor,theme}=param;return $backgroundColor?theme.color[$backgroundColor]:theme.color.normalPrimary}),(param=>{let{theme}=param;return theme.size.p10}),(param=>{let{$fontSize,theme}=param;return $fontSize?theme.size[$fontSize]:theme.size.p24}),(param=>{let{theme}=param;return theme.fontWeight.bold}),(param=>{let{theme}=param;return theme.color.white}),(param=>{let{theme}=param;return theme.size.p10}),(param=>{let{theme}=param;return theme.transition.normal}),(param=>{let{$hoveredBackgroundColor,theme}=param;return $hoveredBackgroundColor?theme.color[$hoveredBackgroundColor]:theme.color.subtlePrimary}));Button.defaultProps={theme:_styles_theme__WEBPACK_IMPORTED_MODULE_2__.w},BaseButton.__docgenInfo={description:"",methods:[],displayName:"BaseButton",props:{width:{required:!1,tsType:{name:"union",raw:"'threeQuarters' | 'quarter' | 'full'",elements:[{name:"literal",value:"'threeQuarters'"},{name:"literal",value:"'quarter'"},{name:"literal",value:"'full'"}]},description:""},backgroundColor:{required:!1,tsType:{name:"union",raw:"'normalPrimary' | 'normalGray'",elements:[{name:"literal",value:"'normalPrimary'"},{name:"literal",value:"'normalGray'"}]},description:""},fontSize:{required:!1,tsType:{name:"union",raw:"'p24' | 'p16'",elements:[{name:"literal",value:"'p24'"},{name:"literal",value:"'p16'"}]},description:""},hoveredBackgroundColor:{required:!1,tsType:{name:"union",raw:"'subtlePrimary' | 'subtleGray'",elements:[{name:"literal",value:"'subtlePrimary'"},{name:"literal",value:"'subtleGray'"}]},description:""}}}},"./styles/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>theme});const theme={size:{p5:"5px",p8:"8px",p10:"10px",p16:"16px",p20:"20px",p24:"24px",p30:"30px",p40:"40px",p80:"80px",p100:"100px",p140:"140px",full:"100%",threeQuarters:"75%",half:"50%",fortyFive:"45%",quarter:"25%"},border:{normalSolid:{size:"1px",type:"solid",color:"#707070"},primarySolid:{size:"1px",type:"solid",color:"#66ccff"}},color:{normalSolid:"#707070",normalPrimary:"#32b7f0",subtlePrimary:"#8fe2fc",palePrimary:"#87ceeb",subtleSuccess:"#66cc33",paleSuccess:"#66cc66",normalDanger:"#dc3545",lightDanger:"#ff9e9c",subtleDanger:"#ff6666",paleDanger:"#cc6666",white:"#fff",normalGray:"#bdbdb7",subtleGray:"#eee"},fontWeight:{bold:700},transition:{normal:"0.3s"}}}}]);