"use client";
import styled, { css } from "styled-components"
import { ButtonProps } from "./type";

const sizeStyles = {
    sm: css`
font-size: 0.875rem;
padding: 6px 10px;
`,
    md: css`
font-size: 1rem;
padding: 10px 14px;
`,
    lg: css`
font-size: 1.125rem;
padding: 12px 18px;
`,
};
const variantStyles = {
    primary: css`
background: linear-gradient(180deg, #ECEEF2, #ECEEF2);
color: black;
border: 1px solid rgba(0,0,0,0.12);
box-shadow: 0 6px 18px rgba(37,99,235,0.18);


&:hover:not(:disabled) {
transform: translateY(-1px);
box-shadow: 0 8px 22px rgba(37,99,235,0.22);
}
`,
    secondary: css`
background: linear-gradient(90deg, #B148FE, #EF3AA5);

color: #0f172a;
border: 1px solid #e6eef8;


&:hover:not(:disabled) {
background: #f7fbff;
}
`,
    ghost: css`
background: transparent;
color: #0f172a;
border: none;
background: linear-gradient(90deg, #B148FE, #EF3AA5);


&:hover:not(:disabled) {
background: rgba(15,23,42,0.04);
}
`,
};
export const StyledButton = styled.button<Required<Pick<ButtonProps, "variant" | "size" | "fullWidth">>>`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 8px;
border-radius: 12px; /* requested */
cursor: pointer;
transition: all 160ms cubic-bezier(.2,.9,.3,1);
user-select: none;
font-weight: 600;
line-height: 1;
white-space: nowrap;
-webkit-tap-highlight-color: transparent;


${(p) => sizeStyles[p.size]}
${(p) => variantStyles[p.variant]}


${(p) =>
        p.fullWidth &&
        css`
width: 100%;
`}


&:disabled {
opacity: 0.55;
cursor: not-allowed;
transform: none;
box-shadow: none;
}
`;
export const IconWrapper = styled.span`
display: inline-flex;
align-items: center;
justify-content: center;
`;