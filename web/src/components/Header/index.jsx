import { FiUser, FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, User } from './styles';
import { USER_ROLE } from '../../utils/roles';
import { USER_ROLE_FORMATTED } from '../../utils/role_formatter';

export function Header() {
    const { signOut, user } = useAuth();

    return (
        <Container>
            <h1>Menu</h1>

            <aside>
                <User>
                    <span>Olá, <strong>{user.name}</strong></span>
                    <small>
                        <FiUser /> Perfil de: {USER_ROLE_FORMATTED[user.role]}
                    </small>
                </User>
            </aside>

            <button type="button" onClick={signOut}>
                <FiLogOut size={24} />
            </button>
        </Container>
    );
};