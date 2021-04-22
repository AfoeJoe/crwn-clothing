import "./custom-button.styles.scss";

const CustomButton = ({ children,isSignInWithGoogle, ...otherProps }) => {
  return (
    <button className={`${
        isSignInWithGoogle ? 'google-style': ''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};
export default CustomButton;
