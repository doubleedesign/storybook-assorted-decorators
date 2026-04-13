import{n as e}from"./chunk-zsgVPwQN.js";var t,n=e((()=>{t=e=>(t,n)=>{let r=document.createElement(`div`);r.style.maxWidth=e;let i=t();return typeof i==`string`?r.innerHTML=i:r.appendChild(i),r}})),r,i,a;e((()=>{n(),r={title:`Storybook Decorators/withMaxWidth`,tags:[`autodocs`],decorators:[t(`400px`)],render:()=>{let e=document.createElement(`div`);return e.style.padding=`1rem`,e.innerHTML=`<p>So it seems like this internet thing is here to stay. You can't just give up. Is that what a dinosaur would do?</p><p>I'm not great at the advice. Can I interest you in a sarcastic comment?</p>`,e.style.backgroundColor=`#f0f0f0`,e},parameters:{docs:{subtitle:`A simple decorator to constrain the width of a story.`,description:{component:`Intended for testing components that are expected to be constrained in real use (without having an explicit max-width of their own), open popups to the side (and 100% width of the main component would cause them to be off-screen or have other unrealistic layout behaviours), and similar use cases.`},source:{type:`code`,language:`javascript`,code:`
            import { withMaxWidth } from '@doubleedesign/storybook-assorted-decorators';

            const meta = {
                title: 'My Component',
                decorators: [
                    withMaxWidth('400px'),
                ],
            };
            
            export default meta;
                `}}}},i={tags:[`!dev`]},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'] // exclude from sidebar
}`,...i.parameters?.docs?.source}}},a=[`Basic`]}))();export{i as Basic,a as __namedExportsOrder,r as default};