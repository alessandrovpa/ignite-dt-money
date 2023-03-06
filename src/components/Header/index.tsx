import * as Dialog from '@radix-ui/react-dialog';
import { HeaderContainer, HeaderContent } from './styles';
import Logo from '../../assets/logo.svg';
import { DefaultButton } from '../DefaultButton';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={Logo} alt="DT Money logo" />
          <h1>DT Money</h1>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <DefaultButton>Nova Transação</DefaultButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
