export type Variant = "primary" | "secondary" | "ghost";
export type Size = "sm" | "md" | "lg";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
}