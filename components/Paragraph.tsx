interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className = '', ...props }) => (
  <p {...props} className={`mb-6 ${className}`}>
    {text}
  </p>
);

export default Paragraph;
