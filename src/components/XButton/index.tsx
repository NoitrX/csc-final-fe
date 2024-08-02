interface ButtonProps {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const XButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div>
      <button type="submit" onClick={onClick} className="flex items-center py-2 px-16 bg-primary text-white font-bold gap-5 font-ubuntu hover:bg-blue-700 transition-all duration-200">
        {children}
      </button>
    </div>
  );
};

export default XButton;
