export as namespace models;

interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {}

interface TextInputInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface TextInputIconProps {
  children: React.ReactNode;
}

interface TextInputRootProps extends React.DivHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}
