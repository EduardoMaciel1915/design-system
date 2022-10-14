import { Slot } from '@radix-ui/react-slot';

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      {...props}
      className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 text-x w-full focus-within:ring-2 ring-cyan-300"
    >
      {props.children}
    </div>
  );
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      {...props}
      className={
        'flex-1 bg-transparent text-gray-100 placeholder:text-gray-400 outline-none'
      }
    />
  );
}

TextInputRoot.displayName = 'TextInput.Root';
TextInputInput.displayName = 'TextInput.Input';
TextInputIcon.displayName = 'TextInput.Icon';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
