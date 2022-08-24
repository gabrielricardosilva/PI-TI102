type MenuOptions = '' | 'all' | 'carrinho' | 'historia' | 'home' | 'index'

export const createMenuObject = (activeMenu: MenuOptions) =>{
    let returnObject = {
        all:false,
        carrinho:false,
        historia:false,
        home:false,
        index:false
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
    return returnObject
}
