import{n as e}from"./chunk-zsgVPwQN.js";function t(e){if(typeof e==`string`&&e.endsWith(`px`)){let t=parseInt(e,10);return isNaN(t)?0:t}}var n,r,i,a=e((()=>{({useArgs:n}=__STORYBOOK_MODULE_PREVIEW_API__),r={__maxWidth:{name:`Max Width`,control:{type:`number`},description:`Set a max width for the story (in px)`,table:{category:`Story Layout`}}},i=e=>(r.__maxWidth.table.defaultValue={summary:t(e)??e},(r,i)=>{let[a,o]=n();a.__maxWidth===void 0&&o({__maxWidth:t(e)});let s=i.args.__maxWidth??e,c=document.createElement(`div`);c.style.maxWidth=typeof s==`number`?`${s}px`:s;let l=r();return typeof l==`string`?c.innerHTML=l:c.appendChild(l),c})})),o,s,c;e((()=>{a(),o={title:`withMaxWidth`,tags:[`autodocs`],decorators:[i(`400px`)],argTypes:{...r},render:()=>{let e=document.createElement(`div`);return e.style.padding=`1rem`,e.innerHTML=`<p>So it seems like this internet thing is here to stay. You can't just give up. Is that what a dinosaur would do?</p><p>I'm not great at the advice. Can I interest you in a sarcastic comment?</p>`,e.style.backgroundColor=`#f0f0f0`,e},parameters:{docs:{subtitle:`A simple decorator to constrain the width of a story.`,description:{component:`Intended for testing components that are expected to be constrained in real use (without having an explicit max-width of their own), open popups to the side (and 100% width of the main component would cause them to be off-screen or have other unrealistic layout behaviours), and similar use cases.`},source:{type:`code`,language:`javascript`,code:`
            import { withMaxWidth } from '@doubleedesign/storybook-assorted-decorators';

            const meta = {
                title: 'My Component',
                decorators: [
                    withMaxWidth('400px'),
                ],
            };
            
            export default meta;
                `}}}},s={tags:[`!dev`]},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'] // exclude from sidebar
}`,...s.parameters?.docs?.source}}},c=[`Basic`]}))();export{s as Basic,c as __namedExportsOrder,o as default};