import { useState } from 'react';

import { Envelope, Lock } from 'phosphor-react';

import { AuthApi } from '../../api';

import {
  Button,
  Checkbox,
  Heading,
  Logo,
  Text,
  TextInput,
} from '../../components';

export function PanelLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isUserSigned, setIsUserSigned] = useState<boolean>(false);

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    setIsUserSigned(true);
    await AuthApi.login(email, password);
  }

  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100 py-[5rem]">
      {isUserSigned && <Text>Login Realizado!</Text>}
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>

      <form
        onSubmit={handleLogin}
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
      >
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button className="mt-4" type="submit">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
