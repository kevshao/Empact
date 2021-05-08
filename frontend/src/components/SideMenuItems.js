function SideMenuItems(props) {
    console.log(props.activeTab)
    console.log(props.text)
    return (
      <div className={"SideMenu-items" + (props.activeTab === props.text ? " SideMenu-items-is-active" : "")} onClick={props.onClick}>
        <img src={props.logo} className="logo" alt="logo" />
        <p> {props.text} </p>
      </div>
    );
  }
  
  export default SideMenuItems;
  