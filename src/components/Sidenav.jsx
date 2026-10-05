import SidenavLinks from "../Layouts/SidenavLinks"
import insta from "../assets/INSTA.png"

function Sidenav() {
  return (
    <div className="p-2 flex fixed flex-col gap-y-5">
        <img src={insta} className="w-40 h-12"/>
        <div>
            <SidenavLinks/>
        </div>
        
    </div>
  )
}

export default Sidenav