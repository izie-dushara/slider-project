const Button = ({ btnClass, icon, onClick }) => {
  return (
      <button className={btnClass} onClick={onClick}>{icon}</button>
  );
};

export default Button;
