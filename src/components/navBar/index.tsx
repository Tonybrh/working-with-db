import * as N from './style';

const NavBar: React.FC = () => {
    return (
        <N.Nav>
            <N.Title>TonyStore</N.Title>

            <N.MenuNav>
                <N.MenuItem>Quartos</N.MenuItem>
                <N.MenuItem>Periféricos</N.MenuItem>
                <N.MenuItem>Computadores</N.MenuItem>
                <N.MenuItem>Peças</N.MenuItem>
            </N.MenuNav>
        </N.Nav>
    );
};

export default NavBar;
