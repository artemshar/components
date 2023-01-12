import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Rating from "./Rating";

export default {
  title: "MuLib/Rating",
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const RatingStarsExample1 = Template.bind({});
RatingStarsExample1.storyName = "Rating = 5 Stars"
RatingStarsExample1.args = {
  num: "5",
};

export const RatingStarsExample2 = Template.bind({});
RatingStarsExample2.storyName = "Rating = 2.5 Stars"
RatingStarsExample2.args = {
  num: "-2.5",
};