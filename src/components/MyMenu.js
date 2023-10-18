

// let MenuItems = () => {
//     return(
//         <li></li>
//     );
// }

function MenuItems(props){
    return(
        <li>{props.info}</li>
    );
}

function MyMenu(){
    return(
        <ul>
            <MenuItems info="Home"/>
            <MenuItems info="About"/>
            <MenuItems info="Contac Us"/>
        </ul>

    );
}

export default MyMenu;