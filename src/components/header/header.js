import './header-style.css';
import { MenuItem } from './elements/menu-item';

export function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <div className='header-left__logo'>Вконтакте</div>
                <input className='header-left__search' type='text' placeholder='Поиск'></input>
            </div>
            <div className='header-right'>
                <MenuItem />
            </div>
        </div>
    )
}