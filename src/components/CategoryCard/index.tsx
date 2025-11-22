import React from "react";
import type { CategoryCardProps } from "./types";
import {  IconBox, Title, Subtitle, CardWrapper } from "./CategoryCard";

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  subtitle,
  onClick,
}) => {
  return (
    <CardWrapper onClick={onClick}>
      <IconBox src={icon}/>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
     </CardWrapper>
  );
};

export default CategoryCard;
