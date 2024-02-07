import { InfoContainer } from "./info/InfoContainer"
import { ProfileButtonContainer } from "./buttons/ProfileButtonContainer"

export const ProfileMenu = () => {
    return (
        <div className="profile-menu-container">
            <InfoContainer />
            <ProfileButtonContainer />
        </div>
    )
}
