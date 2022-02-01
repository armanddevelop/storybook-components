import { MyLabel } from "../../Components/MyLabel"
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default{
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes:{
    size:{control:"select", option:["normal","h1","h2","h3"]},
    color:{control:"select"},
    fontColor:{control:"color"}
  }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args) =><MyLabel {...args}/>
export const Basic = Template.bind({});
Basic.args={
  label: "hola honga",
  allCaps:false,
  size:"h2"
}
export const AllCaps = Template.bind({});

AllCaps.args={
  size:"normal",
  allCaps:true
}
export const Secondary = Template.bind({});

Secondary.args={
  size:"normal",
  color:"secondary"
}
export const Tertiary = Template.bind({});

Tertiary.args={
  size:"normal",
  color:"tertiary"
}
export const CustomFontColor = Template.bind({});

CustomFontColor.args={
  label:"Prueba de Color de fuente",
  size:"h1",
  color:"tertiary",
  fontColor:"#5517ac"
}