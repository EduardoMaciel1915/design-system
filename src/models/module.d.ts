export as namespace models;

interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

interface CheckboxProps {}

interface TextInputInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface TextInputIconProps {
  children: React.ReactNode;
}

interface TextInputRootProps extends React.DivHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}
