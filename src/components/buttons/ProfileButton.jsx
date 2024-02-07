
export const ProfileButton = ({ text, url }) => {
    return (
        <div className="profile-button">
            <a className="text-button" href={url}>
                {text}
            </a>
        </div>
    )
}
