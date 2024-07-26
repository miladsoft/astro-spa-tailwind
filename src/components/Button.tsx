import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const Button = ({ children, href }: ButtonProps) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1, backgroundColor: '#e53e3e' }}
    whileTap={{ scale: 0.9 }}
    className="bg-accent text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300 inline-block"
  >
    {children}
  </motion.a>
);

export default Button;
