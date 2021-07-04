import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from './styles';
type ButtonProps =   ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
    return( 
        
        <ButtonStyled type='button'  {...rest}>{children}</ButtonStyled>
    );
}