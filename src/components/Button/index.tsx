import { StyledButton } from "./Button";
import { ButtonProps } from "./type";

export default function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    ...rest
}: ButtonProps) {
    return (
        <StyledButton variant={variant} size={size} fullWidth={fullWidth} {...rest}>
            {children}
        </StyledButton>
    );
}