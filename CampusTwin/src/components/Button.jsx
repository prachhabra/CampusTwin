function Button({
    children, 
    type="button", 
    variant = "primary", 
    onclick, 
    disabled = false, 
    className = "",
}) {
  return (
    <button type={type}
    onClick={onclick}
    disabled={disabled}
    className={'btn btn-${variant}'}>{children}</button>
  );
}
export default Button;